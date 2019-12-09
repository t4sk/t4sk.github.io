- remix
  - fullscreen
  - 250%
  - hide tabs

# Loop

how to write a for loop and things you should be careful of when writing a for loop

# code

- example of for loop
- Try to avoid writing loops that you cannot estimate the gas consumption.
- demo out of gas
  - loop 10
  - get count
  - loop 10
  - get count
  - check gas consumption
  - set gas limit to 300,000
  - loop 1000

```
pragma solidity ^0.5.11;

contract Loop {
    uint public count;

    function loop(uint n) public {
        for (uint i = 0; i < n; i++) {
            count += 1;
        }
    }
}
```
