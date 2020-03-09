```
pragma solidity ^0.5.11;

/*
Library
This means that if library functions are called, their code is executed in the context of the calling contract

The directive using A for B; can be used to attach library functions (from the library A) to any type (B).

Unlike contracts library can not have any storage variables, as its only meant for code reuse and not for state management.

# embedded vs deployed
- If a smart contract is consuming a library which have only internal functions than EVM simply embeds library into the contract.
- if a library contain public or external functions then library needs to be deployed.

# pure and storage
- safe math
- iterable maps

# using for

# import open zeppelin library (SafeMath)
*/

// NOTE: pure and embedded
library MySafeMath {
    // NOTE: functions are embedded if internal
    // NOTE: no underscore since libraries cannot have state variables
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

// TODO: import from open zeppelin

contract TestSafeMath {
    // NOTE: using for
    using MySafeMath for uint;

    // NOTE: max uint
    uint public MAX_UINT = 2 ** 256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        // NOTE: library functions will receive the object they are called on as their first parameter
        // NOTE: demo overflow return x + y
        return x.add(y);
    }
}

// NOTE: deployed storage
// NOTE: cannot link in Remix
// TODO: why link?
library IterableMapping {
    struct IMap {
        mapping(address => uint) indexOf;
        mapping(address => bool) inserted;
        address[] values;
    }

    // NOTE: IMap and storage
    // NOTE: not underscored
    function has(IMap storage iMap, address addr) public view returns (bool) {
        return iMap.inserted[addr];
    }

    function add(IMap storage iMap, address addr) public {
        require(!has(iMap, addr), "already inserted");

        iMap.inserted[addr] = true;
        // NOTE 0 based index
        iMap.indexOf[addr] = iMap.values.length;
        iMap.values.push(addr);
    }

    // TODO remove

    function size(IMap storage iMap) public view returns (uint) {
        return iMap.values.length;
    }

    function get(IMap storage iMap, uint index) public view returns (address) {
        return iMap.values[index];
    }
}

contract TestIterableMap {
    using IterableMapping for IterableMapping.IMap;

    // NOTE: cannot be public
    IterableMapping.IMap private iMap;

    function testIterableMap() public {
        // NOTE: address must be unique
        // NOTE: first parameter do not need to pass
        iMap.add(address(0));
        iMap.add(address(1));
        iMap.add(address(2));

        for (uint i = 0; i < iMap.size(); i++) {
            // NOTE: you cannot iterate a map
            assert(iMap.get(i) == address(i));
        }
    }
}








```
