# enum

## goals

- enum
- why are they useful

## example setup

- book store
- state transition of an order

# code

- how to declare
- default enum
- how to access enum

# demo

- get status
- ship -> cannot cancel
- ship -> accept (cannot reject), get status
- ship -> reject (cannot accept)
- cancel -> cannot ship

# code

- note about how to implement same logic without enums

```
pragma solidity ^0.5.12;

contract Order {
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    // NOTE: default enum
    Status public status;

    function ship() public {
        // NOTE: explain how to access enum
        require(status == Status.Pending);
        status = Status.Shipped;
    }

    function acceptDelivery() public {
        require(status == Status.Shipped);
        status = Status.Accepted;
    }

    function rejectDelivery() public {
        require(status == Status.Shipped);
        status = Status.Rejected;
    }

    function cancel() public {
        require(status == Status.Pending);
        status = Status.Canceled;
    }
}
```
