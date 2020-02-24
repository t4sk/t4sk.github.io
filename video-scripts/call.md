```
pragma solidity ^0.5.11;

/*
call
- low level method available on address
- not recommended
- examples
    - call existing function
    - call non-existing function (trigger the fallback function)
*/

contract Receiver {
    event Received(address caller, uint amount, string message);

    // NOTE: external, payable
    function () external payable {
        // NOTE: cannot take input, cannot return output
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    // NOTE: inputs
    // NOTE: payable
    // NOTE: outputs
    function foo(string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);

        // NOTE: output
        return _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);

    // NOTE: payable addr
    function testCallFoo(address payable _addr) public payable {
        // NOTE: value and gas optional
        // NOTE: start with ("")
        // NOTE: explain learn abi.encodeWithSignature
            // explain signature
            /*
            - function name with the parenthesised
            - list of parameter types
            - Parameter types are split by a single comma
            - no spaces are used
            - no return type
            (1 byte = 8 bits, 2**8, 256, hex = 0-9a-f 16 * 16 = 256)
            */
            // explain function selector
            // bytes4(keccak256(bytes(signature))
        // NOTE: no space, no return type
        // NOTE: going to call fallback if function signature is wrong
        // NOTE: uint must be uint256

        (bool success, bytes memory data) = _addr.call.value(msg.value).gas(5000)(
            abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)
        );

        emit Response(success, data);
    }

    // NOTE: remove payable addr
    function testCallDoesNotExist(address _addr) public {
        // NOTE: optional value and gas
        (bool success, bytes memory data) = _addr.call(
            abi.encodeWithSignature("doesNotExist()")
        );

        emit Response(success, data);
    }
}

/*
DEMO
- deploy contracts
- callFoo
    - NOTE: 2 logs
    - NOTE: caller
    - NOTE: success
    - NOTE: return data == (x + 1) (parseInt("0x7c")
    - NOTE: walk through code execution
- callDoesNotExist
    - NOTE: 2 logs
    - NOTE: caller
    - NOTE: success
    - NOTE: return data = 0
*/
```

```
pragma solidity ^0.5.11;

/*
call - low level method available on address type
examples
    - call existing function
    - call non-existing function (triggers the fallback function)
*/

contract Reciever {
    event Received(address caller, uint amount, string message);

    function () external payable {
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);

        return _x + 1;
    }
}

contract Caller {
    function testCallFoo(address payable _addr) public payable {
        _addr.call.value(msg.value).gas(5000)("");
    }
}







```
