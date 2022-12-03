# Frizychain

Simple Bitcoin-like blockchain

### Keygen

To generate private/public keys pair, mnemonic phrase and an address, use `npm run keygen`

Similar to Bitcoin it uses **ECDSA** eleptic-curve cryptography algorithm for generating and checking keys and **Base58check** encoding for addresses, which are just public keys hashed with **SHA256** and then with **RIPEMD160**.

### Runtime

At first it will only support **Pay to Public Key Hash**. Although you are able to fill transaction scripts whatever you want, if it isn't **P2PHK**, it may not not be safe. It is the result of Transaction malleability presents in Bitcoin.

In Frizychain hash of transaction doesn't cover inputs unlocking scripts at all, but there will be
additional mechanisms to verify it.

Syntax similar to Bitcoin:

![](http://orm-chimera-prod.s3.amazonaws.com/1234000001802/images/msbt_0501.png)
