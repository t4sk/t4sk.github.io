---
icon: youtube
header: Setup
youTube:
  title: Truffle Setup - Multi Sig Wallet
  url: https://www.youtube-nocookie.com/embed/8fPcQIPNfG8
---

### 1. Setup

Create a folder `solidity-multi-sig-wallet`. We will create a <a href="https://www.trufflesuite.com/docs/truffle/overview" alt="Truffle" target="__blank">Truffle</a> project inside here.

```shell
mkdir solidity-multi-sig-wallet
cd solidity-multi-sig-wallet
```

Install Truffle and create a Truffle project

```shell
npm install -g truffle
truffle init
```

Lastly, install some NPM packages that we will use for testing.

```shell
npm init -f
npm i --save-dev chai chai-as-promised
```

Check that Truffle was installed by typing

```shell
truffle
```

You should see a list of commands available in Truffle.

### 2. Copy & Paste Code from Remix

Create a new file named `MultiSigWallet.sol` inside the folder `contracts`.

Copy and paste contract that we wrote using Remix, into the new file `MultiSigWallet.sol`

Code for the contract is <a alt="code" href="https://github.com/t4sk/solidity-multi-sig-wallet/blob/master/contracts/MultiSigWallet.sol" target="__blank">here</a>

### 3. Compile

Let's quickly check that our code compiles. Type

```shell
truffle compile
```

You should see a message like this

```shell
Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/MultiSigWallet.sol
> Artifacts written to /home/me/solidity-multi-sig-wallet/build/contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang
```
