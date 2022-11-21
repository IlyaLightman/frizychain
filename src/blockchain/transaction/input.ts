import { getCommonHash } from '../../cryptography/utils'

export default class TransactionInput {
    previousOutputHash: string
    unlockingScript: string // Provided by the user to resolve the encumbrance
    timestamp: number
    hash: string

    constructor(previousOutputHash: string, unlockingScript: string) {
        const timestamp = Date.now()
        this.previousOutputHash = previousOutputHash
        this.unlockingScript = unlockingScript
        this.timestamp = timestamp
        this.hash = getCommonHash(previousOutputHash + unlockingScript + timestamp)
    }
}
