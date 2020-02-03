```
pragma solidity ^0.5.11;

/*
Fallback function
- unamed function
- cannot take any inputs, cannot return any outputs
- must be external
- executed when
    - calling a function that does not exist (call video)
    - receiving Ether (NOTE: not executed when calling another payable function) (must be payable)
        - except coinbase (TODO: explain coinbase)
- sent via
    - account (wallet), call (no gas limit)
    - send / transfer (forwards 2300 gas)
        - 2300 gas is not enough to
            - Write to storage
            - Create a contract
            - Call an external function which consumes a large amount of gas
            - Sending Ether
        - TODO: briefly explain re-entrancy and how 2300 gas prevents it
*/
contract Fallback {
    event Log(uint gas);

    // NOTE: unnamed
    // NOTE: no input no output
    // NOTE: external
    // NOTE: payable
    function () external payable {
        // TODO: gasleft
        emit Log(gasleft());
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendToFallback {
    function callFallback(address payable _to) public payable {
        // NOTE: recommended
        // NOTE: forwards all gas
        // NOTE: briefly explain re-entrancy
        (bool sent,) = _to.call.value(msg.value)("");
        require(sent, "Failed to send Ether");
    }

    function transferToFallback(address payable _to) public payable {
        // NOTE: no longer recommended
        // NOTE: forwards 2300 gas
        _to.transfer(msg.value);
    }
}

/*
DEMO
- callFallback (check gas)
- transferToFallback (check gas)
*/
```
