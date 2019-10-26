- inheritance (A -> B)
  - demo inheritted function
  - demo function override
- constructor
  - demo fixed parameters
  - demo input parameters
- in this video
- next video
  - multiple inheritance

```
pragma solidity ^0.5.3;

// Inheritance
    //- inherit functions
    // - override

// Constructor
    // - fixed parameters
    // - input parameters


// contract A {
//     string public name;

//     constructor(string memory _name) public {
//         name = _name;
//     }

//     function foo() public pure returns (uint) {
//         return 1;
//     }

//     function getContractName() public view returns (string memory) {
//         return name;
//     }
// }
//
// Constructor
// contract B is A("Contract B") {
//     // function getContractName() public pure returns (string memory) {
//     //     return "Contract B";
//     // }
// }

// contract B is A {
//     // constructor() A("Contract B") public  {
//     //     name = "Contract B again";
//     // }
//     constructor(string memory _name) A(_name) public  {
//     }
// }

// Order
    //- multiple inheritance
    // - order
    // - calling parent contracts
// order
// All function calls are virtual, which means that the most derived function is called, except when the contract name is explicitly given or the super keyword is used.
contract A {

}

contract B is A {

}

contract C is A {

}

contract D is B, C {
    // todo calling multiple constructors
}

contract E is C, B {

}

// contract F is B, A {

// }
```
