import { ec } from 'elliptic'
import { getCommonHash } from '../../cryptography/utils'
import TransactionInput from './input'
import TransactionOutput from './output'

export default class Transaction {
	inputs: TransactionInput[]
	outputs: TransactionOutput[]
	signature: ec.Signature | null

	constructor(inputs: TransactionInput[], outputs: TransactionOutput[]) {
		this.inputs = inputs
		this.outputs = outputs
		this.signature = null
	}

	public getHash: () => string = () => {
		return getCommonHash(
			this.inputs.reduce((hash, input) => hash + input.hash, '') +
				this.outputs.reduce((hash, input) => hash + input.hash, '')
		)
	}

	// Temporary addition way to sign, i don't know why

	public sign: (keyPair: ec.KeyPair) => void = keyPair => {
		const signatureObject = keyPair.sign(this.getHash())

		this.signature = signatureObject
	}

	public verify: (publicKey: string) => boolean = publicKey => {
		if (!this.signature) return false

		const elliptic: ec = new ec('secp256k1')
		const key = elliptic.keyFromPublic(publicKey, 'hex')
		const verified = key.verify(this.getHash(), this.signature)

		return verified
	}
}
