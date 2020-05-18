---
icon: youtube
header: Install and Setup React
youTube:
  title: Multi Sig Wallet
  url: https://www.youtube-nocookie.com/embed/D-y2XK3YABc
---

# Install and Setup React

### 1. Install React

```shell
npm i -g create-react-app
```

### 2. Initialize React App

```shell
create-react-app multi-sig-wallet --typescript
```

### 3. Start local blockchain using Truffle

Here is what my folders look like

```shell
├── multi-sig-wallet // React app
└── solidity-multi-sig-wallet // Truffle contracts
```

```shell
cd solidity-multi-sig-wallet
truffle develop
```

Inside Truffle console

```shell
migrate
```

### 4. Copy Truffle build into React app

Back in `multi-sig-wallet` folder, copy build files from `solidity-multi-sig-wallet`

```shell
cp -r ../solidity-multi-sig-wallet/build ./src
```

### 5. Start React App

```shell
npm start
```

### Checkout Code So Far (Optional)

```shell
git checkout 01-setup
```
