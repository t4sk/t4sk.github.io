```
pragma solidity ^0.5.11;

/*
# intro
- delegatecall is a low level function similar to call.
- when A delegatecall B
  runs B's code inside A's context (storage, msg.sender, msg.value)
- can upgrade contract A without changing any code inside it

# explain delegatecall context
# explain delegatecall upgrade

# code (contract B, A)
# demo
# code (change storage for contract B)
# demo
# code (contract B2)
# demo

# summary
- delegatecall runs code of callee in caller's context (storage, sender, value)
- upgrade contract without changing the code
- storage layout must be same
*/

contract B {
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract B2 {
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = 2 * _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    // NOTE: storage layout must be the same
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        // NOTE: function signature (similar to call)
        // NOTE: uint256
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}

/*
DEMO
deploy B
deploy A
- setVars
- check state variables on contract A and B
- note sender and value
change B storage
- redeploy B
- setVars
- check A values
create B2
deploy B2
- setVars
- check state variables on contract A
*/


```

```
pragma solidity ^0.5.11;

/*
delegatecall
- a low level function similar to call
- when contract A delegatecall contract B
  it runs B's code inside A's context (storage, msg.sender, msg.value)
- can upgrade contract A without changing any code inside it
*/

contract B {
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract B2 {
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = 2 * _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}

```
