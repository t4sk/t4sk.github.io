---
icon: youtube
header: Fallback
description: Solution
youTube:
  title: Multi Sig Wallet
  url: https://www.youtube.com/embed/Dh7r6Ze-0Bs
  start: 689
  end: 703
---

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
