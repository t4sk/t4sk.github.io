95
Using a smart contract you can store data permanently on the Ethereum blockchain.
But it is very expensive to use the Ethereum blockchain as a data storage.

97
Today the price of Ethereum is $171
and storing 1 MB of data would roughly cost you $1100 dollars (\$1120)

(1024 KB / 1 MB) _ (640,000 gas / KB) _ (10 gwei / gas) _ (0.000000001 Ether / 1 gwei) _ (\$171 / 1 Ether)

248
In this video, I will show you how to write a simple contract to store arbitrary data
on the blockchain and briefly go over an alternative way to store large data.

# State variables

105
Variables in Solidity are stored in one of the 3 locations.

110

- storage (this is where data can be permanently store and these variables are called `state variables`. This is like your hard drive)

111

- memory (variables are only available while a function is executing, this is like your computer memory),

113

- calldata (this is where some function arguments are stored, but we will ignore this one, since we don't need to understand this for our contract).

114
For example,
variables declared here inside the contract, but outside functions are `state variables`,
and they will be stored onto the blockchain.

115
Variables declared here, inside the function are only available during function call,
and they won't be stored on the blockchain.

# Transaction and Call

251
Functions in Solidity can be categorized into 2 types.

254
Functions that create transactions on the blockchain
and functions that dont.

260
To create a transaction you will have to spend your cryptocurrency, you pay with `Ether` on Ethereum blockchain,

263
Functions that create transactions write data onto the blockchain,
like changing the value of a `state variable`, which changes the state of the smart contract,
or sending `Ether` to another account, which changes the balance of accounts recorded on the blockchain.

267
Functions that dont create any transaction on the blockchain are free to call,
and they do not change the state of the blockchain.

269
An example would be a function that reads and returns the value of the a `state variable`
inside a smart contract.

########

# Simple Storage

270
Now let's put all of the concepts mentioned above into code.

271
We will create a simple smart contract to store a text.
Let's name it `SimpleStorage`.

272
Inside the contract, we need to declare a `state variable` of type `string` to store the text.

273
We also need two functions

274

- a public function to update the `text` variable. We'll name it `set`

276

- and another public function to get the `text` variable. We'll name this one `get`

277
The function `set` will modify the `state variable` `text`, which means that it
will change the state of our contract. So this function will create a transaction on the blockchain, and we will have to spend our `Ether`.

278
The `get` function will not change the state of the blockchain,
so it should be free for us to call it.

# set

122
To update the `text` variable in our contract we need the `set` function
to take the new string value as input.

123
In Solidity you need to declare the type of function inputs, in our case we have
a single input of type `string`.

125
For certain data types, including `string`, you have to explicitly declare the data location

129
The data location mentioned before are, storage, memory and calldata (but we won't need this one).

135
So let's think about which keyword we need to use
either `storage` or `memory` .

139
If we use the keyword `storage` then we are telling Solidity that our input is a value
stored somewhere in our contract. But that cannot be the case since we will be
providing the value for the input from outside the contract.

140
So we'll declare it as `memory`.

145
If you accidentally declare it as storage and try to compile it, you will get error like this.

146
For public functions, inputs must be declared as memory.

148
Anyways, let's name this input as `_text` prefixed with an underscore.

151
In Solidity, it is common practice to prefix function inputs with an underscore.
This is done to avoid using the same name as state variables.

153
In this cace, we differentiate the `text` variable with our new text input by prefixing with an underscore.

155
Inside the function, we update the `text` variable to the new value
simply by reassigning it with our input.

# get

158
There are two ways to get variables from a smart contract.

- One way is to write a function to return the value.
- And the other way is to let Solidity compiler write one for you.

160
So why not let Solidity write one for you all the time?

164
Well, there are cases when it's better to write your own.

166
For example you might want to return multiple values from a single function call,
instead of calling two separate functions. I will explain this in a future video.

170
Ok so, let's go over the first way of getting variables, writing our own function.

181
We need our `get` function to return the string value stored in the `text` variable.
so we declare that in our function definition here with the keyword `return` followed by
the type of values we are returning. In our case `string`

182
Again, we need to declare the data location for our `string` type

183
Our `text` variable is stored in contract storage, so you might think that we need to
declare `storage` here.

184
But we need the actual values store in the `text` variable, not the reference to
the variable, so we will declare it as `memory`

187
Actually, for public functions you cannot return a `storage` type. When you compile
your contract you will see an error like this one.

#########################

280
We also need to tell Solidity that this function does not modify any `state variables`.

281
We do this by using either the keyword `view` or `pure`

282
In short, `view` declares that your code does not change the state of the blockchain
and `pure` declares that your function does not change the state of the blockchain and it also does not read any state variables.

283
For our case, we want to read the state variable so let's put the `view` keyword

285
In a future video, I will go over them in details so stay tuned.

287
In Remix, When you call functions with `view` or `pure` keyword, you can see your return values here.

290
However, if you forget to declare your function as `view` or `pure`,
you will notice that your function creates a transaction,
even if your function does not modify the `state variables` stored inside your contract.

#############################333

190
Inside the function, we just return the `text` variable and our getter function is completed

192
The second way of accessing variables is to let Solidity compiler automatically create getter functions.

194
All we have to do is to prefix our state variables with a `public` keyword.

195
After we compile and deploy our contract, you'll see that we have access to public state variable by executing the function with the same name as our variable.

197
In this case, we get a public function, with the same name as the variable `text`
that takes nothing as input and returns the string value stored in the `text` variable.

# demo

198
Now let's compile it and test the contract out.

199
Make sure that the compiler is compatible with the version defined in our smart contract. `(+0.5.3)`, compile and and deploy it.

201
You can see here that we have 3 functions.

`set` to update the `text` variable.
`get` to get the value stored inside the `text` variable

We also have a function with the same name as our `text` variable.
This is the function that was automatically created by the compiler.

295
We can update our text, stored in the smart contract by calling set.
Notice here that a transaction was created.
Also notice here that our account has spent some `Ether`.

297
If you hold any real `Ethereum`, don't worry, it didn't spend any of it from your wallet.
This is just a simulation.

299
We can verify that our text value was updated by either calling `get` or `text`

302
This time it didnt create any transaction, as we expected. and the balance in our
account did not change.

206
Earlier I mentioned that storing data on the blockchain is very expensive.
One way to go around this problem is by using IPFS.

212
In short, IPFS is a peer to peer file storage and anyone can access data by
knowing the hash of the data.

213
So when you upload your data to IPFS, you receive a hash back,
which is the location of your data.

214
And in our smart contract we store the IPFS hash.

219
In this way, you've accomplished two things:

- stored large amount of data for cheap
- and used the smart contract to let everyone know where your data is stored.

222
Let me show you a quick example.

307
Here we have an image of a cat that's been already uploaded to IPFS.
We copy the hash of this image

227
Next in our contract we store the hash.

310
Now anyone can download and see the cat image by
first reading the IPFS hash from our contract

311
and then accessing IPFS at the hash.

# conclusion

313
In this video, we talked about smart contract storage.

314

- variables are stored in 3 locations (storage, memory and calldata)
  but in most cases you only need to consider storage and memory

315

- variables stored in smart contracts are called `state variables`

317

- Functions can be categorized into 2 groups. Ones that create transactions on the blockchain and ones that dont.

319

- Functions that don't create any transaction are declared with the keyword `view` or `pure`

320

- Functions that do create a transaction, write data on the blockchain
  like updating the value of the `state variables` stored in your contract.

321

- Solidity automatically create functions to return the value of `public` `state variables`

238
Storing data on the smart contract is expensive
and by using IPFS you can effectively save large amount of data onto a smart contract

245
I am gonna wrap up around here.
Thanks for watching and I will talk to you later
