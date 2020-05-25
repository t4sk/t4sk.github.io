---
icon: code
header: Execute Transaction
description: Exercise
---

# Execute Transaction (Exercise)

### 1. Checkout the exercise

```shell
git checkout 05-exercise-execute-tx
```

### 2. Exercise

#### `api/multi-sig-wallet.ts`

Complete the function to execute transaction

```typescript
export async function executeTx(
  web3: Web3,
  account: string,
  params: {
    txIndex: number
  }
) {}
```

Define an interface `ExecuteTransaction` and include it to `Log` type

```typescript
/*
Exercise
Define an interface ExecuteTransaction.
The shape of the interface should be the following:
{
  event: "ExecuteTransaction";
  returnValues: {
    owner: string;
    txIndex: string;
  };
}
*/
interface ExecuteTransaction {}

/*
Exercise - Add ExecuteTransaction to Log type
*/
type Log = Deposit | SubmitTransaction | ConfirmTransaction | RevokeConfirmation
```

#### `contexts/MultiSigWallet.tsx`

Complete the `switch` statement, inside `subscribe` function, when a log of type `ExecuteTransaction` is returned

```typescript
switch (log.event) {
  ...
  /*
    Exercise
    Create a case statement for "ExecuteTransaction"
    Call updateTx with the following input
    {
      ...log.returnValues,
      executed: true,
      account,
    }
    */
  ...
}
```

Complete the `reducer`, flag transaction as executed.

```typescript
if (data.executed) {
  /*
  Exercise
  Complete the if statement
  Set updatedTx.executed to true
  */
}
```

### 3. Solution

> Note that there are many ways to implement this feature.
> This solution is just one way.

```shell
git checkout 05-solution-execute-tx
```
