---
icon: youtube
header: Testing
youTube:
  title: Truffle Testing - Multi Sig Wallet
  url: https://www.youtube-nocookie.com/embed/XFQgY-lNNlE
---

### Testing

Your truffle project should look similar to this

```shell
solidity-multi-sig-wallet
├── contracts
├── migrations
├── package.json
├── package-lock.json
├── test
└── truffle-config.js
```

Inside `test` folder, create your test.

Here is the test that we wrote in the video.

```javascript
const chai = require("chai")
chai.use(require("chai-as-promised"))

const expect = chai.expect

const MultiSigWallet = artifacts.require("MultiSigWallet")

contract("MultiSigWallet", (accounts) => {
  const owners = [accounts[0], accounts[1], accounts[2]]
  const NUM_CONFIRMATIONS_REQUIRED = 2

  let wallet
  beforeEach(async () => {
    wallet = await MultiSigWallet.new(owners, NUM_CONFIRMATIONS_REQUIRED)
  })

  describe("executeTransaction", () => {
    beforeEach(async () => {
      const to = owners[0]
      const value = 0
      const data = "0x0"

      await wallet.submitTransaction(to, value, data)
      await wallet.confirmTransaction(0, { from: owners[0] })
      await wallet.confirmTransaction(0, { from: owners[1] })
    })

    // execute transaction should succeed
    it("should execute", async () => {
      const res = await wallet.executeTransaction(0, { from: owners[0] })
      const { logs } = res

      assert.equal(logs[0].event, "ExecuteTransaction")
      assert.equal(logs[0].args.owner, owners[0])
      assert.equal(logs[0].args.txIndex, 0)

      const tx = await wallet.getTransaction(0)
      assert.equal(tx.executed, true)
    })

    // execute transaction should fail if already executed
    it("should reject if already executed", async () => {
      await wallet.executeTransaction(0, { from: owners[0] })

      /*
      try {
        await wallet.executeTransaction(0, { from: owners[0] })
        throw new Error("tx did not fail")
      } catch (error) {
        assert.equal(error.reason, "tx already executed")
      }
      */

      await expect(wallet.executeTransaction(0, { from: owners[0] })).to.be
        .rejected
    })
  })
})
```

Run the test by typing

```shell
truffle test
```

Code for the test is <a alt="code" href="https://github.com/t4sk/solidity-multi-sig-wallet/blob/master/test/multi-sig-wallet.js" target="__blank">here</a>
