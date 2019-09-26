# intro

Welcome back, in the previous video I've mentioned that

```
transaction fee = gas * gas price
```

But what are `gas` and `gas price`?

Let's go over them in this video

# what is gas

`Gas` is an unit used to measure the amount of computation done by a transaction.

For example, the amount of `gas` used to deploy a contract might be 3000 `gas`,
and calling a function inside a contract might use 200 `gas`.

How are the amount of `gas` used calculated?

Every computation needs a specific amount of `gas`. For example,
adding two numbers, `X` and `Y` might require 10 `gas`
and assigning a number to a variable might need 5 `gas`. The exact numbers
are defined in the Ethereum Yellow Paper.

The more computation is done, the more `gas` is consumed.

So for example,
a function that adds two number `X` and `Y`, would use less gas than a
function that adds three `X`, `Y` and `Z`

Why?

Because it takes less effort to compute the sum of 2 numbers, `X`, and `Y`
than to calculate the sum of three numbers `X`, `Y` and `Z`

As an another example, imagine a function to store a string variable.
The function takes a string as an input, and re-assigns the input to another variable.
Less `gas` is needed to set 1 KB of string than to set 1 MB of string
because, it takes less effort to store the smaller data.

```
function set(string memory _text) public {
  text = _text;
}
```

As a final example, imagine a function that never stops. This would use an
infinite amount of gas.

```
function forever() public {
  while (true) {
    // do something
  }
}
```

# purpose of gas

This prevents smart contract functions from running forever.

At every step of
computation, `gas` is deducted, until either the function finishes executing or
all the `gas` is used up, at which point the execution is aborted.

Let's go through an example.

I send a transaction with `3000 gas` to execute this function

```
function forever() public {
  while (true) {
    // do something
  }
}
```

Let's say that it uses `900 gas` on each iteration,
so after the first iteration there's `2100 gas` left.
After the second, there's `1200 gas` left.
and after the third, there's `300 gas` left.
On the 4th iteration, it uses up all remaining `300 gas` midway through the iteration
and the function is forcefully stopped.

# what is gas price

When you send a transaction, along with your transaction data,
you need to send

- the gas limit (this is the maximum amount of `gas` you're willing to use for this transaction)
- the gas price (how much you're willing to pay for each gas, you pay with `Ether`)
- and gas limit \* gas price Ether

The higher you set the `gas limit`, the more computation your transaction can process.
And the lower `gas limit` you set, the less computation your transcation can process.

The higher gas price you set, the more `Ether` you will have to spend, but your
transaction will be processed faster.

And if you set the gas price low, you will have to pay less for your transaction,
but you would have to wait longer for your transaction to be included in a block.

# unspent gas will be refunded

After your transaction is sent, and it's included in a block,
unspent `gas` was will be refunded.

For example

I have a transaction data that I want to send.
I set the gas limit to `3,000,000` and my `gas price` to 2 `wei` per gas.
So I the transaction with `6,000,000` wei, and wait for it to be included in a block.

The transaction used `1,000,000` gas so that's `2,000,000` wei. And I get `4,000,000` wei refunded to my account.

Let's see an example in Remix.

Here we have a function called `testGasRefund`.

Inside the function, it doesn't do much other that return the `gas price`.
When you send a transaction to the real Ethereum network, you set the `gas price`

But gas price in `Remix` is fixed to `1 wei`, and we can verify that by checking the
output of this function.

Compile and deploy the contract.

We don't want our starting account balance to be this number that is hard to remember.
So let's switch over to the second account which has `100 ether` and it's easy to remember.

We will set our `gas limit` to `3,000,000` and execute the function.

Click on the transaction log, and scroll down. We see here next to the label `transaction cost` that
21506 `gas` was used. So we've sent `3,000,000` gas at 1 wei per gas and the
transaction used 21506 `gas`. We expect our account to be refunded for the amount
of gas that we didn't use, so the account should be deducted by `21,506` wei.

Click on the account to check the balance, you can verify that adding `21,506` to the current balance
equals 100 ether, we were refunded for the amount of gas that was not used.

# what happens if you run out of gas?

If your transaction runs out of gas while midway through an execution,
the transaction will fail, and any changes to the state variables will be undone,
but you still have to pay for the gas spent.

Let's go through an example. Back in our contract, we have a function called `forever`.
This function will repeatedly increment the state variable without ever stopping. However once all gas is consumed,
this function will be aborted and the state variable `i` will be reset to the previous state.

First let's see what the value of `i` is, `0`. After we call `forever`, we expect this number to be unchanged.

Next let's test out the function `forever`.

We dont want to wait long for all `3,000,000` gas to be used. Instead we want our transaction to fail fast so let's decrease the `gas limit` to `30,000`

Click on the function and we can see here in the transaction log, that there was an error with the transaction.
Scroll down and we can see here that we've sent `30000` gas and used up all `30,000` of it.

Let's check the value of `i` again. When the function `forever` was called, it incremented this variable,
but since the transaction ran out of gas, we expect any change to the variable `i` to be undone.
Check the return value, it is `0`, as we expected this is the value before we called the `forever` function.

How about our balance? Click on the account, and you can see here, that it is less than before.

# there are two gas limits

There are 2 upper bounds to the amount of gas you can spend

- gas limit (this is the maximum amount of gas your willing to use for your transaction, set by you)
- and block gas limit (which is the maximum amount of gas allowed in a block, this is set by the network)

#outro
In this video we covered that

```
transaction fee = gas * gas price
```

or in simple terms,

```
transaction fee = amount of computation used in a transaction * price your willing to pay per computation
                            (gas used)                                (gas price)
```

- `gas` is a unit of computation deducted during a transaction,
  - it's used to prevent functions from running forever
- `gas price` is the amount of Ether you're willing to pay per `gas`
  - transactions with higher `gas price` will be processed faster
- unspent `gas` will be refunded.
- if your transaction runs out `gas`, changes to state variable are reverted
  - but you still have to pay for the `gas`
- there are 2 upper bounds to the amount of gas you can use
  - gas limit, set by you when you send a transaction
  - block gas limit, set by the network
