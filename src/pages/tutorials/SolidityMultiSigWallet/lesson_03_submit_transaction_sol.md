# Submit Transaction (Solution)

### Solution

```shell
git checkout exercise-02-solution
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
