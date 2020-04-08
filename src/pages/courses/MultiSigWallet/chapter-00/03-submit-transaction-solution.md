---
icon: youtube
header: Submit Transaction
description: Solution
youTube:
  title: Multi Sig Wallet
  url: https://www.youtube-nocookie.com/embed/Dh7r6Ze-0Bs
  start: 383
  end: 472
---

# Submit Transaction (Solution)

### Solution

```shell
git checkout exercise-02-solution
```

```solidity
modifier onlyOwner() {
    require(isOwner[msg.sender], "not owner");
    _;
}
```

```solidity
function submitTransaction(address _to, uint _value, bytes memory _data)
    public
    onlyOwner
{
    uint txIndex = transactions.length;

    transactions.push(Transaction({
        to: _to,
        value: _value,
        data: _data,
        executed: false,
        numConfirmations: 0
    }));

    emit SubmitTransaction(msg.sender, txIndex, _to, _value, _data);
}
```
