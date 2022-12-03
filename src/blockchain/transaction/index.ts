import { ec } from 'elliptic'
import { getCommonHash } from '../../cryptography/utils'
import TransactionInput from './input'
import TransactionOutput from './output'

export default class Transaction {
	inputs: TransactionInput[]
	outputs: TransactionOutput[]

	constructor(inputs: TransactionInput[], outputs: TransactionOutput[]) {
		this.inputs = inputs
		this.outputs = outputs
	}

	public getHash: () => string = () => {
		return getCommonHash(
			[this.inputs, this.outputs].reduce(
				(hash, curr: Array<TransactionInput | TransactionOutput>) => {
					return hash + curr.reduce((hash, input) => hash + input.hash, '')
				}, ''
			)
		)
	}

	public addInput: (previousOutputHash: string, unlockingScript: string) => void = (
		previousOutputHash, unlockingScript
	) => {
		const input = new TransactionInput(previousOutputHash, unlockingScript)

		this.inputs.push(input)
	}

	public addUnsignedP2PHKInput: (previousOutputHash: string) => void = previousOutputHash => {
		this.addInput(previousOutputHash, 'P2PHK_UNSIGNED')
	}

	public signUnsignedP2PHKInputs: (signature: string, publicKey: string) => void = (
		signature, publicKey
	) => {
		this.inputs.forEach(input => {
			if (input.unlockingScript === 'P2PHK_UNSIGNED') {
				input.setUnlockingScript(`${signature} ${publicKey}`)
			}
		})
	}

	public addOutput: (value: number, lockingScript: string) => void = (value, lockingScript) => {
		const output = new TransactionOutput(value, lockingScript)

		this.outputs.push(output)
	}

	public getSignature: (keyPair: ec.KeyPair) => ec.Signature = keyPair => {
		const signatureObject = keyPair.sign(this.getHash())

		return signatureObject
	}

	public verifySignature: (signature: string, publicKey: string) => boolean = (
		signature, publicKey
	) => {
		if (!signature) return false

		const elliptic: ec = new ec('secp256k1')
		const key = elliptic.keyFromPublic(publicKey, 'hex')
		const verified = key.verify(this.getHash(), signature)

		return verified
	}
}
