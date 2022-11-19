import { ec } from 'elliptic'
import base58check from 'base58check'

const elliptic: ec = new ec('secp256k1')

const keyPair: ec.KeyPair = elliptic.genKeyPair()

const publicKey: string = keyPair.getPublic('hex')
const privateKey: string = keyPair.getPrivate('hex')

const address: string = base58check.encode(publicKey)

console.log('Private Key:', privateKey)
console.log('Public Key:', publicKey)
console.log('Address:', address)
