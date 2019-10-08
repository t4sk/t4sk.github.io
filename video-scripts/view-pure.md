Functions can be declared to have certain visibility,
like `public`, `private`, `internal` and `external`.

Functions can also be declared to have certain behavior, such as `view`, `pure`
and `payable`

```
public
private
view
pure
internal
external
payable
```

In this video, let's go over what are `view` and `pure` functions.

# view

Functions with the keyword `view` promises not to modify the state of the blockchain.

### state changes

What are some examples that do modify the state of the blockchain?

According to the Solidify documentation the following are considered to modify the state of the blockchain.

- Writing to state variables.
- Emitting events (also known as logging, which is a topic for another video).
- Creating other contracts.
- Using selfdestruct (which is function to delete contracts).
- Sending Ether via calls (in other words, sending Ether to another address by invoking a function inside a smart contract).
- Calling any function not marked view or pure.
- Using low-level calls.
- Using inline assembly that contains certain opcodes.

So if a function is declared as `view` then that function is making a promise that
it will not do any of the actions that we've mentioned here.

Let's see some examples in Remix.

- Let's go over an example with a function using the `view` keyword in a valid way
- Next let's try to compile functions that are incorrectly marked as view.
  - Let's try to compile function
    - that changes a state variable
    - and a function that calls another function that is not marked as `view`

### example

- valid
- compilation failure (state variable)
- compilation failure (non view function)
- forgot view keyword

# pure

View functions declare not to change the state. `Pure` functions make a stronger promise.

`Pure` functions promise not to modify the state, like `view` functions.
In addition they also promise not to read the state.

### reading state

According to the Solidify documentation the following are considered reading from the state.

- Reading from state variables.
- Accessing address(this).balance or address.balance. (this is how you get the `Ether` balance of an address in Solidity)
- Accessing any of the members of block, tx, msg (with the exception of msg.sig and msg.data).
- Calling any function not marked pure.
- Using inline assembly that contains certain opcodes.

So a `pure` function cannot contain code that does any of the actions mentioned here.
And it also does not contain code that modifies the state.

Let's see some examples in Remix.

- We will go over what functions are `pure` and then see some examples of functions
  that are not `pure`.

### example

First let's see an example of a function that is `pure`

Next let's see an example of a function that is not `pure`. Let's write a function
that reads from a state variable

- compilation failure
- forgot pure keyword
