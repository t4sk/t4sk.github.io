```
pragma solidity ^0.5.11;

/*
Import

Examples
- local files
- github (only in Remix) (different branches)

Folder

├── TestImport.sol
└── Foo.sol
*/

// NOTE: relative import
// NOTE: .sol, ;
import "./Foo.sol";

contract TestImport {
    // NOTE: create contract
    Foo foo = new Foo();

    // NOTE: Test Foo.sol by getting it's name.
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}

// DEMO

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
// NOTE: 0.6
// import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

// NOTE: 0.5
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {}

// DEMO
```
