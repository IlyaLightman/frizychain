# Frizychain

Simple Bitcoin-like blockchain

### Keygen

To generate private/public keys pair, mnemonic phrase and an address, use `npm run keygen`

Similar to Bitcoin it uses **ECDSA** eleptic-curve cryptography algorithm for generating and checking keys and **Base58check** encoding for addresses, which are just public keys hashed with **SHA256** and then with **RIPEMD160**
