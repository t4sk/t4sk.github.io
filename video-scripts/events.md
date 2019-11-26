# Events

What are events?

- fire from smart contract
- log to blockchain
- applications can be notified

## uses

- applications subscribe
- storage (data not accessible from within contracts)
- debugging

# remix

- syntax
  - declaration
  - firing
- index
  - what is index for
  - up to 3 parameters

```
contract Event {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        // You can fire many events
        emit Log(msg.sender, "Hello World!");
        emit Log(msg.sender, "Hello EVM!");
        emit AnotherLog();
    }
}
```

# node example

- code on github
- Dai stable coin
- ABI
- Infura URL

  - I might take this API down in the future

- get past logs
  - demo all logs
  - demo filters (indexed)
    - sender
    - receiver
  - how you can implement a storage
- subscribe

  - URL memo ws
  - demo all
  - demo filter

- in this video
  - syntax Event (3 parameters can be indexed)
  - using web3.js
    - demo of getting past events
    - subscribe to events
