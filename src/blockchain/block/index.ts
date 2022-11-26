import { getCommonHash } from './../../cryptography/utils'
import Transaction from '../transaction'

export default class Block {
	transactions: Transaction[]
	timestamp: number
	merkleTree: string
	nonce: number
	blockNumber: number
	prevBlockHash: string
	difficulty: number
	hash: string

	constructor(blockNumber: number, prevBlockHash: string, difficulty: number) {
		this.transactions = []
		this.timestamp = Date.now()
		this.merkleTree = ''
		this.nonce = 0
		this.blockNumber = blockNumber
		this.prevBlockHash = prevBlockHash
		this.difficulty = difficulty
		this.hash = this.getHash(this)
	}

	public getHash: (block: Block) => string = (block = this) => {
		const { prevBlockHash, blockNumber, timestamp, merkleTree, difficulty, nonce } = block
		return getCommonHash(
			prevBlockHash + blockNumber + timestamp + merkleTree + difficulty + nonce
		)
	}
}
