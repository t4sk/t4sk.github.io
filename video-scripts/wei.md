# Into

6
When you deploy a contract or create a transactions, in Remix, you will see words like
`ether` and `wei` in account balances and transaction logs.

7
What are they?
8
In this video, I will explain what `Ether` is, and some common units of `Ether` (`ether`, `gwei` and `wei`) .

# Ether

13
Similary to how the currency of US is dollar, the currency used within Ethereum is `Ether`

17
`Ether` is used to

- Pay block reward
- pay for transaction fee
- and you can also transfer it between accounts

19
The smallest unit of `Ether` is `wei` and one `Ether` is equal to 10^18 `wei`

20
Here is a complete list of units
and you can use `Wei`, `szabo`, `finney`, and `ether` in Solidity

22
but we will focus on the more commonly used ones, `wei`, and `Ether`

23
Let's go through an example.

25
Here we have our contract.
29
Inside the contract there is a variable set to one `wei` and another variable set to one `ether`.
30
Units can be only be added after literal numbers.
37
For example `1 ether` is a valid code but you won't be able to write `x ether`,
where x is some number variable.

```
uint pulic x = 1;
uint public oneWei = x wei;
```

45
The only effect of appending a unit to a number is a multiplication by a power of 10.
50
So 1 `wei` is the same as multiplying 1 by 10 ^ 0, which is simply just 1
51
and 1 `ether` is equal to multiplying 1 by 10 ^ 18
53
First compile and deploy the contract.
58
Call the function `oneWei` and we can see here that it returned 1
62
Next call `oneEther` and you can see here that it returned a big number.
63
This number should be 10 ^ 18, but it's kinda tedious to count the number of zeroes.
65
So we will let Solidity check it for us.
69
Back in our code, we have a function named `testOneEther`.
Inside this function we check that `1 ether` is equal to `10 ^ 18 wei`.
73
We have already seen that a `wei` is equal to 1.
So this function returns `true` if `1 ether` is equal to the number `10 ^ 18`
and returns `false` otherwise.
76
Under our deployed contract, hit the `testOneEther` button and the function
returns `true` just as we expected.

# Gwei

78
`gwei` stands for `giga wei` and it is equal to 1 billion `wei` (thats 1 with 9 zeroes).
84
The most common situation where you would see the word `gwei` is when you
submit a transaction to the blockchain.
87
For the transaction fee, `gwei` is used to set the `gas price`.
99
`Gas` and `Gas price` are the topics of the next video, so for now, all you need to
know is that `gwei` is equal to 1 billion `wei` and you see it with transactions

103
For example, open your favorite browser and visit `etherscan.io`
106
and click on any transaction.
112
Scroll down, click on the transaction details, and you can see here that
gas price was set in `gwei`

# Conclusion

113, 115, 119

- `Ether` is the currency of Ethereum
- 1 `ether` is 10 ^ 18 `wei`
- 1 `gwei` is 1 billion `wei` and you see it often in transactions

122
I will see you in the next video
