# Function Modifier

- what

// TODO slides
In Solidity, you can easily attach an re-usable code to functions that will be run before and or after a function is executed.

These re-usable code have a special name and syntax, called `function modifiers`.

// TODO slides
In this video I am gonna show you

- how to write a `function modifier`
- and explain why they are useful

* examples

// TODO video
Examples Overview

- Restricting access (basic syntax and why useful?)
- Validate inputs (inputs, multiple modifiers)
- Reentrancy guard (reentrancy hack, before and after)

- no modifier
- restrict access
  - basic syntax
    - `modifier`
    - explain `_`
  - declarative / readability
- validate input
  - input syntax
  - multiple modifiers in one func
    // TODO slides
- lock (re entrancy guard)
  - re entrancy hack
    // TODO slides
  - before and after
- real world open zeppelin

// TODO slides

- In this video
  - function modifier is re-useable code that can be attached to functions, and the code will be run before and or after the function execution.
  - some common ways to use them are
    - restricting write access
    - input validation
    - reentrancy guard

```
pragma solidity ^0.5.3;

contract Modifier {
    // Examples
    // 1. Restricting write access (basic syntax and why useful?)
    // 2. Validate inputs (inputs, multiple modifiers)
    // 3. Reentrancy guard (reentrancy hack, before and after)

    address public owner;
    uint public x = 10;
    bool public locked;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not valid address");
        _;
    }

    function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
        owner = _newOwner;
    }

    modifier noReentrancy() {
        require(!locked, "No reentrancy");

        locked = true;
        _;
        locked = false;
    }

    function decrement(uint i) public noReentrancy {
        x -= i;

        if (i > 1) {
            decrement(i - 1);
        }
    }
}
```
