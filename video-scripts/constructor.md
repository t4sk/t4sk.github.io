- constructor
- inheritance
- inheritance and constructor
- multiple inheritance order
- calling parent functions
- shadowing inheritance

# intro

In this video, we're gonna go over the basic syntax for constructors.

- Explain constructor
  - A constructor is an optional function that is executed only once upon contract creation.

# examples

- constructor syntax
  - constructor is optional (contract without cons)
  - passing parameters

# outro

- future
  - inheritance
  - revisit constructor for parent contracts

```
contract A {
    uint public x;
    uint public y;

    address public owner;
    uint public createdAt;

    constructor(uint _x, uint _y) public {
        x = _x;
        y = _y;

        owner = msg.sender;
        createdAt = block.timestamp;
    }
}
```

// Old code

```
pragma solidity ^0.5.3;

contract A {
    string public name;

    constructor(string memory _name) public {
        name = _name;
    }
}

// There are 2 ways to initialize parent contract with parameters.

// Pass the parameters here in the inheritance list.
contract B is A("Contract B") {
}

contract C is A {
    // Pass the parameters here in the constructor, similar to modifiers.
    constructor(string memory _name) A(_name) public {
    }
}
```
