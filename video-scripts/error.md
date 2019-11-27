- remix
  - F11 fullscreen
  - zoom 200%
  - hide side tab
  - hide tx tab

# Error

- errors causes transaction to fail
  - undo all state changes in the current call
  - errors "bubble up"
- 3 ways to throw an error
  - assert
  - require
  - revert

# account contract

- write out logic for balance, withdraw, deposit without any validation

# assert

- check invariant, to check something that should never be false

  - check for conditions that should never be possible
  - correct code should never reach a failing assertion
    - if this happens, then there is a bug in your code that you need to fix
  - examples
    - invariant
    - overflow / underflow

- consumes all available gas
- code
  - check invariant balance state
  - explain uint overflow / and underflow (using clock) and check for overflow
    - overflow / underflow
      - overflow
        - x + y <= x - 1 => overflow
      - underflow
        - x >= y => x - y >= 0 => no underflow
        - x - y > x => underflow
- demo
  - create `uint constant public MAX_UINT = 2 **256 - 1;`
  - compile and deploy
  - deposit 1 and check balance
  - call MAX_UINT and deposit MAX_UINT
  - check that tx failed and all gas was used
  - check balance and note that balance has not changed
  - hide tabs

# require

- input validation
- validate state conditions before execution
- check output of other functions

- does not consume all gas

- code

  - require deposit amount > 0, "Amount must be > 0"
    - mention optional message
  - require withdraw (amount <= balance) "Insufficient funds"

- demo
  - compile and re deploy
  - deposit 0
    - highlight error message
    - gas consumption
  - deposit 1
  - withdraw 2
  - withdraw 1

# revert

- similar to require but with more complex logic
- code
  - rewrite withdraw using revert (note reverse logic)
- demo
  - deposit 1
  - withdraw 1
  - withdraw 1

```
pragma solidity ^0.5.11;

contract Account {
    uint public balance;
    uint constant public MAX_UINT = 2 ** 256 - 1;

    function deposit(uint _amount) public {
        require(_amount > 0, "Amount must be > 0");

        uint oldBalance = balance;

        balance += _amount;

        // check overflow
        assert(balance >= oldBalance);
        // check invariant
        assert(balance == oldBalance + _amount);
    }

    function withdraw(uint _amount) public {
        // require(_amount <= balance, "Insufficient funds");
        if (_amount > balance) {
            revert("Insufficient funds");
        }

        uint oldBalance = balance;

        balance -= _amount;

        // check underflow
        assert(balance <= oldBalance);
        // check invariant
        assert(balance == oldBalance - _amount);
    }
}
```
