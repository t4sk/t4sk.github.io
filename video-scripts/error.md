# Error

- errors causes transaction to fail
  - undo all state changes in the current call
  - errors "bubble up"
- 3 ways to throw an error
  - assert
  - require
  - revert

# assert

- check invariants, to check something that should never be false

  - check for conditions that should never be possible
  - correct code should never reach a failing assertion
    - if this happens, then there is a bug in your code that you need to fix
  - examples
    - overflow / underflow
    - invariants (balance = prevBalance + amount)

- consumes all available gas
- code

  - division by 0
  - check for overflow

# require

- input validation
- validate state conditions before execution
- check output of other functions

- does not consume any gas from (metropolis)
- optional message

# revert

- similar to require but with more complex logic
