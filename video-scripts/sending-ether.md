```solidity
pragma solidity ^0.5.11;

/*
3 ways to send ether from a contract to another contract
- transfer (2300 gas, throws error)
- send     (2300 gas, returns bool)
- call     (forward all gas or set gas, returns bool)

NOTE: gas cost can change in the future
NOTE: recommended method after 2019 Dec (use call and guard against re-entrancy)
      guard against re-entrancy by
      - making all state changes before calling other contracts
      - modifier
*/

contract ReceiveEther {
    // NOTE: explain fallback function for 0.5
    // NOTE: This function cannot have arguments, cannot return anything and must have external visibility
    // NOTE: fallback function must be external (cannot be public)
    // NOTE: must be payable to receive Ether
    function () external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract CannotReceiveEther {}

contract SendEther {
    // NOTE: payable address and func
    function sendViaTransfer(address payable _to) public payable {
        // NOTE: forwards 2300 gas
        // NOTE: possible to re-introduce re-entrancy since gas cost can change in the future
        // NOTE: throws error if you send more than msg.value
        // NOTE: throws error if you send it to non-payable address
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // NOTE: send returns bool and you need to check that send succeed or not
        // NOTE: forwards 2300 gas
        // NOTE: possible to re-introduce re-entrancy in the future
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        // NOTE: explain value
        // NOTE: explain ("")
        // NOTE: explain data
        // NOTE: explain forward all gas or set gas
        (bool sent, bytes memory data) = _to.call.value(msg.value)("");
        require(sent, "Failed to send Ether");
    }
}

/*
DEMO
deploy ReceiveEther
deploy SendEther
send via transfer
send via send
send via call
*/
```
