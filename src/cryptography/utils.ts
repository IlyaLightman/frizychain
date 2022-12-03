import { createHash } from 'crypto'
import ripemd160 from 'ripemd160'
import base58check from 'base58check'

export const SHA256 = msg => createHash('sha256').update(msg).digest('hex')
export const RIPEMD160 = msg => new ripemd160().update(msg).digest('hex')

export const getCommonHash = source => SHA256(SHA256(source))

export const getAddressFromPublicKey = publicKey => base58check.encode(RIPEMD160(SHA256(publicKey)))
export const getHashedPublicKeyFromAddress = address => base58check.decode(address)
