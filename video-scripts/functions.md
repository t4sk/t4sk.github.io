# Functions

In programming language like Python, functions can take in data types like arrays and maps as inputs
and also return these data types as output.

However, you might be surprised and not happy to find out that, in Solidity
public functions cannot accept certain data types as input,
and you also cannot return certain data types as outputs.

In this video, let's explore

- what data types you cannot use as inputs and outputs for a public function,
- and go over data types that you shouldn't use as input
- and data types that you shouldn't use as outputs.

We will also go over the syntax for returning multiple outputs from a function.
This is an useful feature when you want to aggregate multiple function outputs into a single function call.

<!-- # basic function

First let's quickly go over the syntax for writing a function.
Here we have a function called `add`.
The function takes two non negative integers, `i` and `j`, declared with the keyword `uint` which stands for unsigned integer.
It adds the two integers and returns the `sum`.
So we declare the return type as `uint` with the keywords `returns` followed by the type `uint` inside the parentheses.

```
function add(uint i, uint j) public returns (uint) {
  return i + j;
}
``` -->

# input data types

In Solidity, you cannot pass certain data types as input for a public function

Some data types that you cannot use as inputs are

- map
- multi dimensional dynamic-sized array

Let's see what happens if we try to compile a contract with invalid inputs.

### map

```
function mapInput(mapping(uint => uint) memory map) public {
}
```

Inside Remix, we have a function that takes a map as input. I don't know any
useful situation where it would be handy to have a public function with a map as input.

But let's imagine that we really needed this function.

Let's try compiling the contract.
You will get an error like the one you see here.

### multi dimensional fixed sized array

We've seen that public functions cannot accept map as input.

How about multi dimensional fixed sized array?

Will it compile?

```
function multiDimFixedSizeArrayInput(uint[9][9] memory _arr) public {
}
```

It does.

What might be useful case to pass a multi dimentional fixed sized array?

How about sudoku?

Imagine there is a contract. This contract has 2 things. (a Sudoku puzzle and a reward)
The contract pays out the reward in `Ether` to the first person who can solve the sudoku puzzle set inside the contract.

```
function submitAnswer(uint[9][9] answer) public {

}
```

This contract will have a public function called `submitAnswer` which takes a
2 dimensional array of integers, that represents a potentially solved sudoku puzzle.

The function verifies the submitted solution. If the submitted solution is correct,
the contract pays out the reward to the submitter.

### multi dimensional dynamic sized array

Mutli dimensional array with fixed size compiled. How about multi dimensional fixed sized array?
Will it compile?

```
function multiDimDynamicSizeArrayInput(uint[][] memory _arr) public {
}
```

Try compiling the contract and you get an error like the one you see here.

The error message states that if you change the `pragma` to `experimental ABIEncoderV2`
then we will be able to write public functions that can take in a multi-dimensional array.

Here I've done exactly that, changed the pragma inside the contract.
But as you can see here in the warnings, you should not deploy a contract with experimental features to the mainnet,

### array

```
function arrayInput(address[] memory _arr) public {
}
```

So far, we've seen that public functions with inputs of type

- map failed
- dynamic array
  - with fixed size (compiled)
  - with dynamic size (failed)

How about a simple one dimensional array of dynamic size?
Will it compile?

It does. Great!

How might this function be useful?

It might be useful to initialize a multisig wallet with the addresses of the owners.
But you cannot hard code the number of owners since the number of owners can vary.
You can have a multisig wallet owned by 2 people, 10 people, 100 people, the number of
owners cannot be coded into the contract.

For example the constructor for a multisig wallet contract might look like this.

```
contract MultiSig {
  address[] public owners;

  constructor(address[] memory _owners) public {
    owners = _owners;
  }
}
```

`constructor` is a special function that is executed only once when the contract is deployed.

The function takes an array of owners and saves the owners into the contract.
The number of owners can vary so it makes sense to pass a dynamic sized array of addresses as input.

If you're interested in a real world example of a multisig wallet, that's actually being used today,
checkout the contract by `Gnosis`. I've put the links in the description.

# Should you write function that takes array of unbounded size?

So we've seen public functions can take dynamic sized array as input. This is useful.
But should you write functions that take array of arbitrary size?

In most case, the answer is no. The reason is simple. `Gas`.
The bigger the array is, the more gas it would use.
The function would complete successfully for some arrays and fail for other inputs depending on the array size and how much gas is available.
As a contract developer, this is difficult to predict upfront
and it goes against the general design goals of a smart contract to be reliable and with predictable outcomes

Going back to our multisig example, the contract might be able deploy for 10 owners,
but for 1,000 owners, it might use up all gas and fail to deploy.

One way to make this smart contract more reliable is to limit the maximum number of owners,
which would put an upper bound to amount of gas this transaction can possibly use.

```
contract MultiSig {
  uint MAX_OWNER_COUNT = 10;
  address[] public owners;

  constructor(address[] memory _owners) public {
    if (_owners.length > MAX_OWNER_COUNT) {
      // throw error
    }

    owners = _owners;
  }
}
```

# output data types

Limitations on the outputs of a public function is similar to that of inputs.

Outputs of type

- map does not compile
- multi dimensional fixed array does compile
- multi dimensional dynamic sized array (does not compile, but does with if the experimental feature `ABIEncoderV2` is enable)
- array (also compiles)

Let's see them in action.

Back in our contract, first declare some data types.

- a map
- an array
- a multi dimensional array of fixed size
- and a multi dimensional array of with out a fixed size

Next, let's see if theses functions that return different data types can compile.

Try compiling. You would see errors next to the function that return a `map` and also
next to the function that returns multi dimensional dynamic sized array.

You would also see errors messages here, below the compile button, and these errors are
similar to the ones we saw when we tried to compile functions with invalid inputs.

Functions that return a map is not allows.
multi dimensional array with fixed size are, but ones with dynamic size are not.
and Solidity has no problem compiling a function that returns an array.

As mentioned earlier, the question is should you? Yes you can write a function
the returns an array of unbounded size. But should you?

Again the answer is probably not. What can go wrong?

Imagine there are two contract, `A` and `B`. Contract `A` has a function that returns an array of addresses.
This function simply returns the array of addresses store in the contract.
This function does not create any transaction, so you don't have worry about gas right?
Wrong. Why?
Imagine contract `B` has a function that calls contract `A` to get the array of addresses and does something with it,
like sending `Ether` to each address.

Now what would happen if the array of addresses in contract `A` is huge, and contract `B` tries to get it?
This function will fail every time, because it would use up all gas before the function can be completed.
As long the array in contract `A` is big, the function in contract `B` will fail.

So to summarize, when writing smart contracts you rather be safe than sorry and one way to be
safe is write functions that have a bounded consumption of gas.

# Return multiple values as output

So far, Solidity's restriction on functions does not make developers happy. But one
good feature of Solidity, is that you can return multiple values, and as a bonus they can be named.

When is this useful? Let's break this question into two parts.

- When is it useful to return multiple outputs?
- and when is it useful to return them with named variables?

### When is it useful to return multiple outputs?

So when is it useful to return multiple outputs?
It's useful when you want a function that aggregates multiple function outputs and values store in the smart contract
and return all of them in a single function call.

Let's see an example. Let's say that our contract store two integers in variables `x` and `y`
One way to get the value of `x` and `y` is call the functions `x()` and `y()` individually. That's 2 function calls.
Another way is to write a function that returns the two values in one function call, like the one you see here.

In solidity you declare that your function is going to return multiple values by
listing the types of values to return inside the parentheses after the `return` keyword in the function signature.

Inside the function, you list the values to return inside a parentheses.

### When is it useful to return them named?

When is it useful to return them named?

## TODO

- named return values
- assigned return values
- destructuring assignment

```

pragma solidity ^0.5.3;

contract Function {
    function arrayInput(address[] memory _arr) public {
    }

    // function multiDimArrayInput(address[][] memory arr) public {
    // }

    // function mapInput(mapping(uint => uint) memory map) public {
    // }

    mapping(uint => uint) map;
    address[] arr;
    address[][] arr2D;

    function arrayOutput() public returns (address[] memory) {
        return arr;
    }

    // function multiDimArrayOutput() public returns (address[][] memory) {
    //     return arr2D;
    // }

    // function mapOutput() public returns (mapping(uint => uint) memory) {
    //     return map;
    // }

    uint public x = 1;
    uint public y = 2;

    function returnMultipleVals() public pure returns (uint, uint) {
        return (x, y);
    }

    function named() public pure returns (uint x, uint y) {
        return (1, 2);
    }

    function assigned() public pure returns (uint x, uint y) {
        x = 1;
        y = 2;
    }

    function destructingAssigments() public pure returns (uint) {
        (uint x, uint y) = (1, 2);
        // Values can be left out.
        (uint a, , uint b) = (4, 5, 6);
        (uint i,) =  returnMultipleVals();

        return (x, y, a, b, i);
    }

}

```

```

```
