---
icon: youtube
header: Execute Transaction
description: Solution
youTube:
  title: Multi Sig Wallet
  url: https://www.youtube.com/embed/Dh7r6Ze-0Bs
  start: 607
  end: 677
---

# Execute Transaction (Solution)

### Solution

```shell
git checkout exercise-04-solution
```

```solidity
function executeTransaction(uint _txIndex)
    public
    onlyOwner
    txExists(_txIndex)
    notExecuted(_txIndex)
{
    Transaction storage transaction = transactions[_txIndex];

    require(
        transaction.numConfirmations >= numConfirmationsRequired,
        "cannot execute tx"
    );

    transaction.executed = true;

    (bool success, ) = transaction.to.call.value(transaction.value)(transaction.data);
    require(success, "tx failed");

    emit ExecuteTransaction(msg.sender, _txIndex);
}
```
