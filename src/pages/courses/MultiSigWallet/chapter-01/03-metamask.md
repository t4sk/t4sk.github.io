---
icon: youtube
header: Metamask
youTube:
  title: Connect Truffle with Metamask - Multi Sig Wallet
  url: https://www.youtube-nocookie.com/embed/jaTnIeWjAg0
---

### 1. Start local blockchain

```shell
truffle develop
```

### 2. Copy Truffle url into Metamask

After typing `truffle develop` from step 1, you should see something like this inside the Truffle console.

```shell
Truffle Develop started at http://127.0.0.1:9545/
```

Copy the url `http://127.0.0.1:9545/` and set up a custom RPC inside Metamask.

### 3. Import accounts

Copy the private keys from Truffle console and import them into Metamask.

Here is the private keys listed inside my Truffle console. I recommend you import the private keys that you see inside your Truffle console.

```shell
Accounts:
(0) 0xf36467c4e023c355026066b8dc51456e7b791d99
(1) 0x6b1a5bb56b9956e2db2b5584846c5641331134d0
(2) 0x6dd58e6bccc8ba9269783d470e3dda3a6e8d8c7f

Private Keys:
(0) 03f7c8a78d147592992a7b835d3e0cc29e992e6924af7a1fcced5b0d25317c86
(1) 4902221c58878e6e8bccf35d68371b28f06d1fc7bb4e49baf919bf696460f92d
(2) af7592d51c7cde468ec5d45ec3ccda0401d150131876c8db3ca36324c009d837
```
