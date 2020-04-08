---
icon: youtube
header: Confirm Transaction
description: Solution
youTube:
  title: Multi Sig Wallet
  url: https://www.youtube-nocookie.com/embed/Dh7r6Ze-0Bs
  start: 472
  end: 608
---

# Confirm Transaction (Solution)

### Solution

```shell
git checkout exercise-03-solution
```

```solidity
modifier txExists(uint _txIndex) {
    require(_txIndex < transactions.length, "tx does not exist");
    _;
}

modifier notExecuted(uint _txIndex) {
    require(!transactions[_txIndex].executed, "tx already executed");
    _;
}

modifier notConfirmed(uint _txIndex) {
    require(!transactions[_txIndex].isConfirmed[msg.sender], "tx already confirmed");
    _;
}
```

```solidity
function confirmTransaction(uint _txIndex)
    public
    onlyOwner
    txExists(_txIndex)
    notExecuted(_txIndex)
    notConfirmed(_txIndex)
{
    Transaction storage transaction = transactions[_txIndex];

    transaction.isConfirmed[msg.sender] = true;
    transaction.numConfirmations += 1;

    emit ConfirmTransaction(msg.sender, _txIndex);
}
```
