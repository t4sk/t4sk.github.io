---
icon: "youtube"
header: "Fallback"
description: "Solution"
youTubeTitle: "Multi Sig Wallet"
youTubeUrl: "https://www.youtube.com/embed/Dh7r6Ze-0Bs"
youTubeStart: 689
youTubeEnd: 702
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
