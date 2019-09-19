# Into

When you deploy a contract or create a transactions, in Remix, you will see words like
`ether` and `wei` in account balance and transaction logs.

What are they?

In this video, I will explain what `Ether` is, and some common units of `Ether` (`ether`, `gwei` and `wei`) .

# Ether

Similary to how US dollar is the currency of US, `Ether` is the currency used within Ethereum, except it's digital.

`Ether` is used to

- reward miners for mining a block
- pay for transaction fee
- and you can also transfer it between accounts

The smallest unit of `Ether` is `wei` and one `Ether` is equal to 10^18 `wei`

Here is a complete list of units and the more commonly used ones are
`wei`, `gwei`, and `ether`

You can use the units `Wei`, `finney`, `szabo` and `ether` inside your Solidity contract.

Let's go through an example.

Here we have our contract.

Inside the contract there is a variable set to one `ether` and another variable set to one `wei`.

Units can be only be added after literal numbers.

For example `1 ether` is a valid code but you won't be able to write `x ether`.

```
uint pulic x = 1;
uint public oneWei = x wei;
```

The only effect of appending a unit to a number is a multiplication by a power of 10.

So 1 `wei` is the same as multiplying 1 by 10 ^ 0, which is simply just 1

and 1 `ether` is equal to multiplying 1 by 10 ^ 18

First compile and deploy the contract.

Call `oneWei` and we can see here that `1 wei` is equal to just 1

Next call `oneEther` and you can see here that it returned a very large number.

This number should be 10 ^ 18, but it's kinda tedious to count the number of zeroes.

So we will let Solidity check it for us.

Over here back in our code, we have a function named `testOneEther`.

Inside this function we check that `1 ether` is equal to `10 ^ 18 wei`.
We have already seen that a `wei` is equal to 1.

So this function returns `true` if `1 ether` is equal to the number `10 ^ 18`
and returns `false` otherwise.

Under our deployed contract, hit the `testOneEther` button and the function
returns `true` just as we expected.

# Gwei

`gwei` stands for `giga wei` and it is equal to 1 billion `wei` (10 ^ 9 wei).

The most common situation where you would see the word `gwei` is when you
submit a transaction.
For the transaction fee, you choose the `gas price` in `gwei`.

`Gas` and `Gas price` are the topics of the next video, so for now, all you need to
know is that `gwei` is equal to 1 billion `wei` and you see it with transactions

For example, visit the block explorer `etherscan.io` and click on any transaction.

Scroll down, click on the transaction details, and you can see here that this
transaction's gas price was set at 24 `gwei` (// TODO edit value of gas price)

# Conclusion

- `Ether` is the currency of Ethereum
- 1 `ether` is 10 ^ 18 `wei`
- 1 `gwei` is 1 billion `wei` and you see it often in transactions

I will see you in the next video
