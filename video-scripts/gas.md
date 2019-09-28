# intro

Welcome back, in the previous video I've mentioned that

```
transaction fee = gas used * gas price
```

But what are `gas` and `gas price`?

Let's go over them in this video

# gas

Imagine I have a smart contract, deployed on the blockchain.

Inside the contract a variable stores some data

I send a transaction to update the variable.

For this transaction to be processed, there are number of operations that must be

done, like copying over each byte from the input into the variable store in the smart contract.

The total amount of computation used to process this transaction is measured

in a special unit called `gas`.

For example, the amount of `gas` used to deploy a contract might be 3000 `gas`,
and calling a function to update a variable might use 200 `gas`.

How are the amount of `gas` used for a transaction calculated?

A transaction needs to perform a bunch of smaller computations.

Every computation needs a specific amount of `gas` to execute. For example,
adding two numbers, `X` and `Y` might require 10 `gas`
and assigning a number to a variable might need 5 `gas`. The exact numbers of
gas required for each computation are defined in the Ethereum Yellow Paper.

At every step of
computation, `gas` is deducted, until either the function finishes executing or
all the `gas` is used up, at which point the execution is aborted.

What is the purpose of `gas`?

The purpose of `gas` is to limit the amount of computations that a transaction can do.

How does `gas` limit the amount of computations?

Imagine I have a code that would never stop.
I send a transaction with `1000 gas` to execute this function

```
function forever() public {
  while (true) {
    // do something (- 300 gas)
  }
}
```

After the first iteration it used 300 gas and I am left with `700 gas`.
After the second, it used 300 gas again and there's `400 gas` left.
and 100 gas is left after the 3rd iteration
On the 4th iteration, it uses up all remaining `100 gas` midway through the iteration
and the function is forcefully stopped.

# what is gas price

When you send a transaction, along with your transaction data,
you need to send

- the gas limit (this is the maximum amount of `gas` you're willing to use for this transaction)
- the gas price (how much you're willing to pay for each gas, you pay with `Ether`)
- and gas limit \* gas price Ether

The higher you set the `gas limit`, the more computation your transaction can process.
And the lower `gas limit` you set, the less computation your transaction can process.

The higher `gas price` you set, the more `Ether` you will have to spend, but your
transaction will be processed faster.

And if you set the `gas price` low, you will have to pay less for your transaction,
but you would have to wait longer for your transaction to be included in a block.

# unspent gas will be refunded

After your transaction is sent, and it's included in a block,
your account will be refunded for the unspent `gas`.

For example

I have a transaction that I am going to send.
I am willing to use up to `3,000` gas for my transaction so I set the gas limit at `3,000`
I am not in a hurry to get the transaction included in a block so I set the `gas price` lower than average at 2 `gwei`.
So I send the transaction with `3,000 gas` x `2 gwei / gas` which is `6,000 gwei`
and wait.

After the transaction is processed, which used `1,000` gas so that's `2,000` gwei.
I get `4,000` gwei refunded to my account.

Let's see an example in Remix.

Here we have a function called `testGasRefund`.

Inside the function, it doesn't do much other that return the `gas price`.
When you send a transaction to the real Ethereum network, you set the `gas price`

But gas price in `Remix` is fixed to `1 wei`, and we can verify that by checking the
output of this function.

Compile and deploy the contract.

We don't want our starting account balance to be this number that is hard to remember.
So let's switch over to the second account which has `100 ether` and it's easier to check out balance after
the transaction.

We will set our `gas limit` to `3,000,000` and execute the function.

Click on the transaction log, and scroll down. We see here next to the label `transaction cost` that
21506 `gas` was used. So we've sent `3,000,000` gas at 1 `wei` per gas and the
transaction used `21,462 gas`. We expect our account to be refunded for the amount
of gas that we didn't use, so the account should be deducted by `21,462` wei.

Click on the account to check the balance, you can verify that adding `21,462` to the current balance
equals 100 ether, we were refunded for the amount of gas that was not used.

# what happens if you run out of gas?

what happens if you run out of gas?

If your transaction runs out of gas while midway through an execution,
the transaction will fail, and any changes to the state variables will be undone,
but you still have to pay for the gas spent.

Let's see an example in Remix. Back in our contract, we have a function called `forever`.
This function will repeatedly increment the state variable, `i` without ever stopping.
However once all gas is consumed, this function will be aborted and the state variable `i` will be reset to the
previous state before the transaction started.

First let's see what the value of `i` is, `0`. After we call `forever`, we expect this number to be unchanged.

Next let's test out the function `forever`.

But first, we dont want to wait long for all `3,000,000` gas to be used.
Instead we want our transaction to fail fast so let's decrease the `gas limit` to `30,000`

Click on the function and we can see here in the transaction log, that there was an error with the transaction.
Scroll down and we can see here that we've sent `30,000` gas and used up all `30,000` of it.

Let's check the value of `i` again. When the function `forever` was called, it incremented this variable,
but since the transaction ran out of gas, we expect any change to the variable `i` to be undone.
Check the return value, it is `0`, as we expected this is the value before we called the `forever` function.

How about our balance? Click on the account, and you can see here, that it is less than before,
we didn't get a refund for the invalid transaction.

# there are two gas limits

There are 2 upper bounds to limit the amount of gas you can spend

- gas limit (this is the maximum amount of gas your willing to use for your transaction, set by you)
- and block gas limit (which is the maximum amount of gas allowed in a block, this is set by the network)

#outro
In this video we covered that

```
transaction fee = gas used * gas price
```

- `gas` is a unit of computation deducted during a transaction,
  - it's used to prevent functions from running forever
- `gas price` is the amount of Ether you're willing to pay per `gas`
  - transactions with higher `gas price` will be processed faster
- unspent `gas` will be refunded.
- if your transaction runs out `gas`, changes to state variable are reverted
  - but you still have to pay for the `gas`
- there are 2 upper bounds to limit the amount of gas you can use
  - gas limit, set by you when you send a transaction
  - block gas limit, set by the network

```
pragma solidity ^0.5.3;

contract Gas {
  function testGasRefund() public returns (uint) {
    return tx.gasprice;
  }

  uint public i = 0;

  function forever() public {
    while(true) {
      i += 1;
    }
  }
}
```
