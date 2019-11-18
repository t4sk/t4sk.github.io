# Visibility

- function
  - public
  - private
  - external
  - internal
- variables
  - public
  - private
  - internal
  - external state variable is not possible
- private variables are visible to the blockchain

```
pragma solidity ^0.5.11;

// Examples of each visibility for functions and variables
// - private
// - internal
// - public
// - external

// order or examples
// internal -> external visibility

contract Base {
    // Private function can only be called
    // - inside this contract
    // Contracts that inherit this contract cannot call this function.
    function privateFunc() private pure returns (string memory) {
        return "private function called";
    }

    function testPrivateFunc() public pure returns (string memory) {
        return privateFunc();
    }

    // Internal function can be called
    // - inside this contract
    // - inside contracts that inherit this contract
    function internalFunc() internal pure returns (string memory) {
        return "internal function called";
    }

    function testInternalFunc() public pure returns (string memory) {
        return internalFunc();
    }

    // Public functions can be called
    // - inside this contract
    // - inside contracts that inherit this contract
    // - by other contracts and accounts
    function publicFunc() public pure returns (string memory) {
        return "public function called";
    }

    // External functions can only be called
    // - by other contracts and accounts
    function externalFunc() external pure returns (string memory) {
        return "external function called";
    }

    // function testExternalFunc() public pure returns (string memory) {
    //     return externalFunc();
    // }

    // State variables
    string private privateVar = "my private variable";
    string internal internalVar = "my internal variable";
    string public publicVar = "my public variable";
    // State variables cannot be external
    // string external externalVar = "my external variable";
}

contract Child is Base {
    // function testPrivateFunc() public pure returns (string memory) {
    //     return privateFunc();
    // }

    function testInternalFunc() public pure returns (string memory) {
        return internalFunc();
    }

    // function testExternalFunc() external pure returns (string memory) {
    //     return externalFunc();
    // }
}
```
