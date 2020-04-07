# Fallback (Solution)

### Solution

```shell
git checkout exercise-01-solution
```

```solidity
function () payable external {
  emit Deposit(msg.sender, msg.value, address(this).balance);
}
```
