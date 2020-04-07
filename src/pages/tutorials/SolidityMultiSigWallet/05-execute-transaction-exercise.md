---
icon: "code"
header: "Execute Transaction"
description: "Exercise"
---

# Execute Transaction (Exercise)

### 1. Checkout the exercise

```shell
git checkout exercise-04
```

### 2. Exercise

Write your code inside `contracts/MultiSigWallet.sol`

Complete the `executeTransaction` function

```solidity
function executeTransaction(uint _txIndex)
    public
    onlyOwner
    txExists(_txIndex)
    notExecuted(_txIndex)
{

}
```

- [ ] Execute the transaction
  - it should require that `number of confirmations >= numConfirmationsRequired`
  - set `executed` to `true`
  - execute the transaction using the low level `call` method
  - require that the transaction executed successfully
  - emit `ExecuteTransaction`

```solidity
event ExecuteTransaction(address indexed owner, uint indexed txIndex);
```

### 3. Test

Test your code

```shell
npm test
```
