---
icon: youtube
header: Migration
youTube:
  title: Truffle Migration - Multi Sig Wallet
  url: https://www.youtube-nocookie.com/embed/36k8XT2u6G4
---

### 1. Start local blockchain

```shell
truffle develop
```

### 2. Write migration code

Inside `migrations` folder create a new javascript file. I am going to name it
`2_deploy_contracts.js`

Here is the code to deploy our multi-sig wallet contract

```javascript
const MultiSigWallet = artifacts.require("MultiSigWallet")

module.exports = function (deployer, network, accounts) {
  const owners = accounts.slice(0, 3)
  const numConfirmationsRequired = 2

  deployer.deploy(MultiSigWallet, owners, numConfirmationsRequired)
}
```

### 3. Run migration script

Inside truffle console type

```shell
migrate
```
