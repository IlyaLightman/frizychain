import { ec } from 'elliptic'
import { createHash } from 'crypto'
import RIPEMD160 from 'ripemd160'
import base58check from 'base58check'

const elliptic: ec = new ec('secp256k1')
const SHA256 = msg => createHash('sha256').update(msg).digest('hex')

const keyPair: ec.KeyPair = elliptic.genKeyPair()

const publicKey: string = keyPair.getPublic('hex')
const privateKey: string = keyPair.getPrivate('hex')

const address: string = base58check.encode(
    new RIPEMD160().update(SHA256(publicKey)).digest('hex')
)

console.log('Private Key:', privateKey)
console.log('Public Key:', publicKey)
console.log('Address:', address)
