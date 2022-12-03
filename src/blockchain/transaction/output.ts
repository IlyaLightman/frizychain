import { getCommonHash } from './../../cryptography/utils'

export default class TransactionOutput {
	value: number
	lockingScript: string // The encumbrance that must be fulfilled
	hash: string

	constructor(value: number, lockingScript: string) {
		this.value = value
		this.lockingScript = lockingScript
		this.hash = getCommonHash(value + lockingScript)
	}
}
