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

contract Caller {
    // NOTE: Callee input (address)
    // TODO: what is the type of Callee?
    function callSetX(Callee _callee, uint _x) public {
        uint x = _callee.setX(_x);
    }

    // NOTE: payable
    function callSetXAndSendEther(Callee _callee, uint _x) public payable {
        // NOTE: fails to compiles if func does not exit or wrong parameters (unlike call)
        // NOTE: assigning multiple outputs
        (uint x, uint value) = _callee.setXandSendEther.value(msg.value)(_x);
    }
}

/*
DEMO
NOTE: callee = address type
callSetX
callSetXAndSendEther
*/
```
