```
pragma solidity ^0.5.11;

/*
- call is low level function to call other functions and send ether
- examples
call non payable function in another contract
call payable function in another contract
- common way to call function and send ether
*/

contract Callee {
    uint public x;
    uint public value;

    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }

    // NOTE: how to return multiple outputs
    function setXandSendEther(uint _x) public payable returns (uint, uint) {
        x = _x;
        value = msg.value;

        return (x, value);
    }
}

contract Foo {
    uint public x;

    function setX(uint _x) public returns (uint) {
        x = _x + 1;
        return 0;
    }
}

contract Caller {
    // NOTE: same as above
    // NOTE: Callee input (address)
    function setX(Callee _callee, uint _x) public {
        // NOTE: no guarantee that code at Callee will be executed
        // NOTE: return value
        uint x = _callee.setX(_x);
    }

    function setXFromAddress(address _addr, uint _x) public {
        // NOTE: instantiate contract
        Callee callee = Callee(_addr);
        callee.setX(_x);
    }

    // NOTE: payable
    function setXandSendEther(Callee _callee, uint _x) public payable {
        // NOTE: fails to compiles if func does not exit or wrong parameters (unlike call)
        // NOTE: returning multiple outputs
        (uint x, uint value) = _callee.setXandSendEther.value(msg.value)(_x);
    }
}
```
