import { ec } from 'elliptic'
import { getAddressFromPublicKey } from './utils'

const elliptic: ec = new ec('secp256k1')

const keyPair: ec.KeyPair = elliptic.genKeyPair()

const publicKey: string = keyPair.getPublic('hex')
const privateKey: string = keyPair.getPrivate('hex')

const address: string = getAddressFromPublicKey(publicKey)

console.log('Private Key:', privateKey)
console.log('Public Key:', publicKey)
console.log('Address:', address)
