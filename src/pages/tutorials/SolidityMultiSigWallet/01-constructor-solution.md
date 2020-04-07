# Constructor (Solution)

### Solution

```shell
git checkout exercise-00-solution
```

```solidity
constructor(address[] memory _owners, uint _numConfirmationsRequired) public {
  require(_owners.length > 0, "owners required");
  require(
    _numConfirmationsRequired > 0 && _numConfirmationsRequired <= _owners.length,
    "invalid number of required confirmations"
  );

  for (uint i = 0; i < _owners.length; i++) {
    address owner = _owners[i];

    require(owner != address(0), "invalid owner");
    require(!isOwner[owner], "owner not unique");

    isOwner[owner] = true;
    owners.push(owner);
  }

  numConfirmationsRequired = _numConfirmationsRequired;
}
```
