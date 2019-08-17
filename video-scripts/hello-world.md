7 Hey guys, I'm Taz and welcome to the very first episode of Learning Solidity By Example

8 In this video, I am going to show you how to write a basic smart contract in Solidity.

9 I will show you

- how to write your first smart contract
- compile it
- deploy it to a blockchain simulator
- and finally run the smart contract
- all inside your browser

12 Links to the code are in the description below.

## Remix

13
So first go to remix.ethereum.org. This is our online code editor and our
blockchain simulator

14 Once the page loads click on the solidity button

16
To create your first contract go up to the file explorer.
Click this plus button and create a new file.

18 We will name our smart contract HelloWorld

## pragma

24
The very first thing that you would want to do in your contract is to specify the
compiler version.

25
At the moment, there seems to be a bug in Remix where the compiler with version 0.5.1 and 0.5.2 do not work.

26
So we will specify our contract version to be greater than or equal to 0.5.3 AND less than 0.6

## contract

29
We start with a keyword `contract` and we will name it `HelloWorld`.

30
Best practices to keep in mind here are

33

- one contract for each file
- contract name should match the file name
- contract name should start with a capital letter followed by camel case

34
for example `hello world` would be `Hello` with a capital `H` followed without any space by `World` again with a capital `W`

35
This is actually a valid contract.

39
But it does nothing at all so let's make it a little more interesting by
storing a greeting message.

40
We create a string variable, let's name it `greet` with our message `Hello World!`

42
At the moment this variable is only accessible inside this contract.

44
We can make it accessible outside the contract by putting the keyword `public`.

45
I will explain more about the keyword `public` in another video.

49
And our contract is completed, so now let's compile it.

# compile

51
click this Solidity icon

54
make sure that the compiler is within our range (gte 0.5.3 and lt 0.6)

57
next click on this compile button.

58
If you dont see any errors or warnings here, that means you're good to go.

59
Also you will see a green check here

# deploy and run

65
Next we will deploy our contract onto a blockchain simulator running inside your browser,

68
So go to "Deploy and run transactions"

61
Make sure that our smart contract "HellowWorld.sol" is selected and hit deploy.

63
You can see that our contract is deployed here.

70
Let's check that we can get the greeting message.

72
Click on the `greet` button and you can see here that we get our message.

# Recap

73
So to recap.

79

- We learned how to writer our first smart contract
- set the compiler version using the keyword `pragma`
- and how to create a publicly accessible variable using the keyword `public`

80
Thanks for watching and see you in the next video
