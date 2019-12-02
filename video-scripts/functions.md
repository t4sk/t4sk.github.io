# Functions

The syntax for declaring a function in Solidity is straight forward.

```
function myFunc(type name, type name) returns (type, type) {

}
```

function name, data type and variable name for each input, other declaration (like the keyword `public`, `view`, `pure`)
and types of outputs to return.

And we would be done with this video, if Solidity functions were like other programming languages.

In programming language like JavaScript, functions can take in data types like arrays and maps as inputs
and also return them as output.

However, you might be surprised and not amused to find out that, in Solidity
public functions cannot accept certain data types as input,
and you also cannot return certain data types as outputs.

So In this video, let's explore

- the restrictions on the type of inputs and outputs for a public function,
- and go over data types that you can use but you really shouldn't use, or at least be extremely careful

We will also go over the syntax for returning multiple outputs from a function.
This is an useful feature when you want to aggregate multiple function outputs into a single function call.

# input

In Solidity, you cannot pass certain data types as input to a public function

Some data types that you cannot use are

- map and
- multi dimensional array without a fixed size

Let's see what happens if we try to compile a contract with these invalid inputs.

### map

```
function mapInput(mapping(uint => uint) memory map) public {
}
```

In Remix, we have a function that takes a map as input.

Let's try compiling the contract.
You will get an error like the one you see here.

### multi dimensional fixed sized array

How about multi dimensional fixed sized array?

Will it compile?

```
function multiDimFixedSizeArrayInput(uint[9][9] memory _arr) public {
}
```

It did.

### multi dimensional dynamic sized array

How about multi dimensional dynamic sized array?
Will this compile?

```
function multiDimDynamicSizeArrayInput(uint[][] memory _arr) public {
}
```

Try compiling the contract and you get an error like the one you see here.

The error message states that if you change the `pragma` to `experimental ABIEncoderV2`
then this function is valid code.

Here I've done exactly that, changed the pragma inside the contract.
But as you can see here in the warnings, you should not deploy a contract with experimental features to the mainnet,

### array

```
function arrayInput(address[] memory _arr) public {
}
```

How about a regular one dimensional array?
Will it compile?

It does. Great!

# Should you write function that takes array of unbounded size?

So we've seen public functions can take array as input.
But should you write functions that take array of arbitrary size?

In most case, the answer is no. The reason is simple. `Gas`.

The bigger the array is, the more gas it would use.
The function would complete successfully for some arrays and fail for other inputs
depending on the size of the array and how much gas is available.

As a developer, this is difficult to predict upfront
and it goes against best practices to write
smart contracts that are simple, reliable and with predictable outcomes

One way to make this function more reliable is to require that the size of the array is
less than some fixed number.

This would put an upper bound to amount of gas this function can possibly use.

```
uint MAX_ARR_LENGTH = 10;

function arrayInput(address[] memory _arr) public {
  if (_arr.length > MAX_ARR_LENGTH) {
    // throw error
  }
}
```

# output data types

Limitations on the outputs of a public function is similar to that of inputs.

Outputs of type

- map
- and multi dimensional array with dynamic size do not compile

Let's try them out in Remix.

Back in our contract, first declare some data types.

- a map
- an array
- a multi dimensional array of fixed size
- and a multi dimensional array with out a fixed size

Next, let's see if theses functions that return different data types can compile.

Try compiling. You would see errors next to the function that return a `map` and also
next to the function that returns a multi dimensional array.

You would also see error messages here, below the compile button, and these errors are
similar to the ones we saw with invalid inputs.

Solidity has no problem compiling a function that returns an array.
But should you write a function the returns an array of unbounded size?

Again the answer is probably not. What can go wrong?

Imagine there are two contract, `A` and `B`. Contract `A` has a function that returns an array of addresses.

This function does not create any transaction, so you don't have to worry about gas right?
Wrong. Why?
Imagine contract `B` has a function that calls contract `A` to get the array of addresses and does something with it,
like sending `Ether` to each address.

Now what would happen if the array of addresses in contract `A` is huge, and contract `B` tries to get it?
The function in contract `B` will fail every time, and many people are unhappy that
they can't receive `Ether`.

So to summarize, when writing smart contracts you rather be safe than sorry and one way to be
safe is write functions that have a bounded consumption of gas.

# Return multiple values as output

Solidity's limitations on public functions is inconvenient. But one
useful feature of Solidity, is that you can return multiple values, and as a bonus they can be named.

Let's see an example in Remix.

```
function returnMany() public pure returns (uint, bool, uint) {
    return (1, true, 2);
}
```

You can declare that a function is returning multiple values by
listing the types of values inside the parentheses after the `return` keyword

Inside the function, you list the values to return.
So here we are declaring that this function will return 3 variables. of type `uint`, `boolean` and `uint`
We return the values matching the types that we declared above

Outputs can also be named like this.

```
function named() public pure returns (uint i, bool b, uint j) {
    return (1, true, 2);
}
```

also you can explicitly assign to return variables and omit the last `return` statement, like this.

```
function assigned() public pure returns (uint i, bool b, uint j) {
    i = 1;
    b = true;
    j = false;
}
```

### When is it useful to return multiple outputs?

So when is it useful to return multiple outputs?
It's useful when you want a function that collect outputs of several functions
and return all of them in a single function call.

Let's say that we have functions `f` and `g`.

One way to get the outputs of `f` and `g` is to call the functions individually. That's 2 function calls.
Another way is to write a function that calls `f` and `g` and returns the two outputs in a single function call.

# destructuring assignment

How do you assign variables to the output of a function that returns multiple values?

You use destructuring assignments.

It's easier to understand by example than to explain what it is .
So let's go through an example using actual code.

Here we are assigning the outputs of the function `returnMultipleVals`.

Notice that the type of variables declared, here on the left side,
is consistent with the type of values being returned from the function call.

You dont have to assign all values. If a function returns three parameters, but you dont care about the
second output, this is how you do it.

Here you are telling Solidity that, you need the first output,
not the second, so you omit declaring the type and naming it, and you also need the 3rd output.

# In this video

In this video

- we tried to compile public functions with different data types as inputs and outputs,
  In both cases
  - map cant be used
  - multi dimensional fixed size array can be used
  - multi dimensional dynamic sized array (cannot)
  - array (compiles, but be careful and you should put a upper bound to the array size)
- We also learned how to write functions that return multiple values.
  - these outputs can be
    - named
    - or assigned
- Finally we saw how to assign variables from a function that return multple values.

Thanks for watching.

In the next video, I plan to cover `pure` and `view` functions. Have a nice week, and see you soon.