---
icon: code
header: Monitor Network
description: Exercise
---

# Monitor Network (Exercise)

### 1. Checkout the exercise

```shell
git checkout 03-exercise-monitor-network
```

### 2. Exercise

#### `api/web3.ts`

Complete the function to monitor network id. Network id can be fetched by calling

```typescript
await web3.eth.net.getId()
```

```typescript
export function subscribeToNetId(
  web3: Web3,
  callback: (error: Error | null, netId: number | null) => any
) {
  // Write your code here.
}
```

#### `contexts/Web3.tsx`

Compete the `UpdateNetId` interface by setting the type of `netId`

```typescript
interface UpdateNetId {
  type: "UPDATE_NET_ID"
  // TODO: Exercise - What should the type of netId be?
  netId: any
}
```

Complete `reducer` to update state with the network changes

```typescript
    case UPDATE_NET_ID: {
      // TODO: Exercise - update net id
      return {
        ...state,
      };
    }
```

Inside `Provider` write function to dispatch action to update network id

```typescript
function updateNetId(data: { netId: number }) {
  // TODO: Exercise - Write function to dispatch action to update net id
}
```

Inside `Updater` component, call `subscribeToNetId`. When `netId` is returned
from the callback, update the network id.

```typescript
useEffect(() => {
  if (state.web3) {
    const unsubscribe = subscribeToNetId(state.web3, (error, netId) => {
      if (error) {
        console.error(error)
      }
      if (netId) {
        /*
          TODO Exercise - Complete code to subscribe to net id.
          If the state.netId is 0, then update the net id,
          else reload the web page
          */
      }
    })

    return unsubscribe
  }
}, [state.web3, state.netId, updateNetId])
```

### 3. Solution

> Note that there are many ways to implement this feature.
> This solution is just one way.

```shell
git checkout 03-solution-monitor-network
```
