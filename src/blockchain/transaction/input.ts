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
        // There isn't unlocking script here yet (and probably won't be),
        // so it doesn't covered by hash and verifies with other mechanisms
        this.hash = getCommonHash(`${previousOutputHash}${timestamp}`)
    }

    public setUnlockingScript: (unlockingScript: string) => void = unlockingScript => {
        // TODO: Additional checks of new script
        this.unlockingScript = unlockingScript
    }
}
