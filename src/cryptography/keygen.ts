import { ec } from 'elliptic'
import { getAddressFromPublicKey } from './utils'
import { entropyToMnemonic } from 'bip39'

const elliptic: ec = new ec('secp256k1')

const keyPair: ec.KeyPair = elliptic.genKeyPair()

const publicKey: string = keyPair.getPublic('hex')
const privateKey: string = keyPair.getPrivate('hex')

const mnemonic: string = entropyToMnemonic(privateKey)

const address: string = getAddressFromPublicKey(publicKey)

console.log('Private Key:', privateKey)
console.log('Mnemonic:', mnemonic)
console.log('Public Key:', publicKey)
console.log('Address:', address)
