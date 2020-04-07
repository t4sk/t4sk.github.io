---
icon: "youtube"
header: "Revoke Transaction"
description: "Solution"
---

# Revoke Confirmation (Exercise)

### Solution

```shell
git checkout exercise-05-solution
```

```solidity
function revokeConfirmation(uint _txIndex)
    public
    onlyOwner
    txExists(_txIndex)
    notExecuted(_txIndex)
{
    Transaction storage transaction = transactions[_txIndex];

    require(transaction.isConfirmed[msg.sender], "tx not confirmed");

    transaction.isConfirmed[msg.sender] = false;
    transaction.numConfirmations -= 1;

    emit RevokeConfirmation(msg.sender, _txIndex);
}
```
