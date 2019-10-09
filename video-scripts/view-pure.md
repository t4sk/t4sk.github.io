Functions can be declared to have certain visibility,
like `public`, `private`, `internal` and `external`.

Functions can also be declared to have enable or disable certain behavior, such as `view`, `pure` and `payable`

In this video, let's go over what are `view` and `pure` functions.

# view

Functions with the keyword `view` promises not to modify the state of the blockchain.

### state changes

What are some examples that do modify the state of the blockchain?

// TODO video
According to the Solidify documentation the following are considered to modify the state of the blockchain.

- Writing to state variables.
- Emitting events (also known as logging, which is a topic for another video).
- Creating other contracts.
- Using selfdestruct (which is function to delete contracts).
- Sending Ether via calls (in other words, sending Ether to another address by invoking a function inside a smart contract).
- Calling any function not marked view or pure.
- Using low-level calls.
- Using inline assembly that contains certain opcodes.

So if a function is declared as `view` then that function
cannot contain any code that does any of the actions mentioned here.

Let's go over some examples in Remix.

- First we'll walk through an example of a valid `view` function
  Next we will try to compile
  - a function that is declared as `view`, but does change the state variable.
  - and also try to compile a function also declared as `view` but calls another function that is neither `view` nor `pure`

### example

##### valid

// TODO video
First let's see an example of a function declared `view` that keeps the promise not to change the state.

Here we have a state variable `i` initialized to 1.

`addToX` is a function that takes an integer variable named `y` as input and returns
the sum of `x` + `y`

This function is a valid `view` function, since it reads the state variable `x`
but does not update it

We can verify that calling this function does not change the state variable.

Compile and deploy the contract. Next get the value of the state variable `x`,
it's 1, which is the value that we initialized it to. We'll call this function
later again, to convince ourselves that the state variable was not modified.

Next call `addToX` with a some number. You'll get the sum of `x` and your input.

Notice that calling this function did not create any transaction on the Remix console at the bottom. As long you calling a function does not create a transaction, there is no way to change the state of the blockchain.

So `addToX` is a honest function that keeps its promise not to modify the state.

To be 100% sure, let's double check that the value of the state variable `x` has not changed.

It's still 1. Great, `addToX` is a valid `view` function

##### compilation failure (state variable)

// TODO video
Can we declare a function as view but break the promise not to make any state changes, by updating the state variable?

Let's give it a try.

We'll write a function called `updateX`, declare it as `view`. However inside the function,
we violate the promises by updating the state variable `x` by increasing it by 1.

Hit compile

You'll see a compilation error like this.

This is a really good feature that Solidity compiler can detect code that can potentially modify the state.

##### compilation failure (non view function)

// TODO video
Function is not a `view` function if it calls another function neither marked as `view` nor `pure`.

As an example, here we have a function called `notView`. `notView`, as the name suggests, is a function not declared as `view`

`invalidViewFunc` is a function declared as `view`, but inside that function it calls
the function `notView`.

If you try to compile this code, you'll get an error stating that this function `invalidViewFunc` contains code that potentially modifies the state.

# pure

View functions declare not to change the state. `Pure` functions make a stronger promise.

`Pure` functions promise not to modify the state, like `view` functions.
In addition they also promise not to read the state.

### reading state

// TODO video
According to the Solidify documentation the following are considered reading from the state.

- Reading from state variables.
- Accessing address(this).balance or address.balance. (this is how you get the `Ether` balance of an address in Solidity)
- Accessing any of the members of block, tx, msg (with the exception of msg.sig and msg.data).
- Calling any function not marked pure.
- Using inline assembly that contains certain opcodes.

So a `pure` function cannot contain code that does any of the actions mentioned here.
And it also does not contain code that modifies the state.

Let's see some examples in Remix.

First we'll go over an example of a valid `pure` function
and then see some examples of functions that are not `pure`.

### example

##### Valid pure

// TODO video
First let's see an example of a function that is `pure`

`add` is a function that takes two inputs `i` and `j` and returns the sum of them

This function is a valid `pure` function. It doesn't change any state and inside the
function you can look through the code and see that it doesn't read from state,
such as state variables, and any special variables mentioned earlier like `address.balance`,
`block`, `tx` and `msg`.

Furthermore this function does not call any other non-pure function.

As you can see here, this is valid code and it compiled.

##### Reading state

// TODO video
Next let's see an example of a function that is not `pure`.

Let's try compiling a function that reads from the state variable and declare the function as `pure`

Let's re-visit the `addToX` function back at the top of the contract.

This function is valid `view` function. It reads the state variable `x`, but doesn't change it. However, since it does read a state variable, `addToX` is not a `pure` function.

Let's declare it as `pure` anyways and see if it compiles.

You'll see a similar error to the ones we've got when we tried to compile a invalid `view` function.

##### Calling non-pure

// TODO video
Similar to how a `view` function can only call other `view` or `pure` functions,
a `pure` function can only call other `pure` function.

So a function declared as `pure` but if it calls a non-pure function, then it is not valid code.

Let's see an example.

Here, we have function `foo`, neither `view` nor `pure`

and we also have function `invalidPureFunc` declared as `pure`. Inside this function,
`foo` is called.

Since `foo` is neither `view` nor`pure`, this contract will not compile.

Changing `foo` to `view` will not change the end result.

The code becomes valid when you declare `foo` as a `pure` function.

So we've just seen that a pure function can only call other pure functions.

# forgot view or pure keyword

// TODO video
It's easy to forget to declare a function as `view` or `pure`. The good news is that,

the Solidity compiler is smart enough to warn you that you might have forgotten to

put these `keywords` on your functions.

When you compile your contract in Remix, you'll get warnings stating

that functions can be declared as `view` or `pure`.

So don't forget to carefully check the warnings and fix your code if necessary.

# In this video

In this video we covered `view` and `pure` functions.

- view functions promises not to modify state
- pure functions make a stronger promise thant view functions. They promise neither to modify state nor read from state

Thank you so much for watching and I will see you next time

```Solidity
pragma solidity ^0.5.3;

contract ViewAndPure {
    uint public x = 1;

    // Promise not to modify the state.
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // function updateX() public view {
    //     x += 1;
    // }

    function foo() public pure {
    }

    function invalidPureFunc() public pure {
        foo();
    }

    // function invalidViewFunc() public view {
    //     foo();
    // }

    // Promise not to read from or modify the state.
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}
```
