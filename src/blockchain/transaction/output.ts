import { getCommonHash } from './../../cryptography/utils'

export default class TransactionOutput {
	value: number
	lockingScript: string // The encumbrance that must be fulfilled
    timestamp: number
	hash: string

	constructor(value: number, lockingScript: string) {
        const timestamp = Date.now()
		this.value = value
		this.lockingScript = lockingScript
        this.timestamp = timestamp
		this.hash = getCommonHash(value + lockingScript + timestamp)
	}
}
