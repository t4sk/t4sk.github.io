# Payable

Functions declared payable can receive ether for the contract.

```solidity
pragma solidity ^0.5.11;

// TOPICS
// payable function, constructor and address

// CODE
// payable and non payable function
// payable constructor
// msg.sender, msg.value, address(this).balance
// withdraw (payable owner)
    // transfer (next video)
// transfer (payable address)
// get balance helper


contract Wallet {
    event Deposit(address sender, uint amount, uint balance);
    event Withdraw(uint amount, uint balance);
    event Transfer(address to, uint amount, uint balance);

    // NOTE: payable
    address payable public owner;

    // NOTE: append payable after deposit and nonPayable
    constructor() public payable {
        owner = msg.sender;
    }

    // Try calling this function along with some ether.
    // The balance of this contract will be automatically updated.
    // NOTE: payable
    function deposit() public payable {
        // NOTE: msg.value, msg.value, address(this).balance
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    // Try calling this function along with some ether.
    // The function would throw an error since this function is not payable.
    function notPayable() public {
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function withdraw(uint _amount) public onlyOwner {
        owner.transfer(_amount);
        emit Withdraw(_amount, address(this).balance);
    }

    // NOTE: address payable
    function transfer(address payable _to, uint _amount) public onlyOwner {
        // NOTE: _to.transfer is different function from above
        _to.transfer(_amount);
        emit Transfer(_to, _amount, address(this).balance);
    }

    // Get the amount of ethers stored in this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

// DEMO
// - deploy with ether (NOTE: Deploy button is red)
// - get balance (NOTE: about wei (10 ^ 18)
// - deposit
// - get balance
// - notPayable
// - withdraw (NOTE: account balance)
// - get balance
// - transfer to account 2 (NOTE: only owner)
// - get balance

// SUMMARY
// - payable on function, constructor and address
```
