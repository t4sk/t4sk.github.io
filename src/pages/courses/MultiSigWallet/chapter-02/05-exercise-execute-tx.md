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

Complete the `siwtch` statement when a log of type `ExecuteTransaction` is returned

```typescript
useEffect(() => {
  if (web3 && state.address) {
    return subscribe(web3, state.address, (error, log) => {
      if (error) {
        console.error(error)
      } else if (log) {
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
      }
    })
  }
}, [web3, state.address])
```

Complete the `reducer`, flag transaction as executed.

```typescript
function reducer(state: State = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case UPDATE_TX: {
      const { data } = action

      const txIndex = parseInt(data.txIndex)

      const transactions = state.transactions.map((tx) => {
        if (tx.txIndex === txIndex) {
          const updatedTx = {
            ...tx,
          }

          if (data.executed) {
            /*
            Exercise
            Complete the if statement
            Set updatedTx.executed to true
            */
          }
          ...

          return updatedTx
        }
        return tx
      })

      return {
        ...state,
        transactions,
      }
    }
  }
}
```

### 3. Solution

> Note that there are many ways to implement this feature.
> This solution is just one way.

```shell
git checkout 05-solution-execute-tx
```
