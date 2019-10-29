- syntax for inheritance
- simple case when a contract inherits a single parent contract (A -> B)
- how to pass parameters to parent contract

- inheritance
  - inherited function
  - function override (function signature must match)
- constructor
  - demo fixed parameters
  - demo input parameters
- next video
  - multiple inheritance and calling parent contracts

```
pragma solidity ^0.5.3;

// Examples
// Inheritance
// - inherit functions
// - override functions

// Passing parameters to parent constructor
// - fixed parameters
// - input parameters

// Inheritance
// - inherit functions
// contract A {
//     function getContractName() public view returns (string memory) {
//         return "Contract A";
//     }
// }

// contract B is A {

// }

// Inheritance
// - override
// contract A {
//     function getContractName() public view returns (string memory) {
//         return "Contract A";
//     }
// }

// contract B is A {
//     function getContractName() public view returns (string memory) {
//         return "Contract B";
//     }
// }

// Constructor
// - passing fixed paremeters
contract A {
    string public name;

    constructor(string memory _name) public {
        name = _name;
    }
}

// contract B is A("Contract B") {

// }

// contract B is A {
//     constructor() A("Contract B") public {

//     }
// }

// - variable parameters
contract B is A {
    constructor(string memory _name) A(_name) public {

    }
}

```
