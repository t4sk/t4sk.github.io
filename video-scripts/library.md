```
pragma solidity ^0.5.11;

/*
Library
- no state variables
- cannot hold ether

Why use libraries?
- DRY (Don't Repeat Yourself)
- Save gas

// TODO: slides
Libraries can be embedded or linked
- embedded (library has only internal functions)
- must be deployed and then linked (library has public or external functions)

Examples
- safe math (embedded, pure internal functions)
- iterable map (functions operating on storage)
*/

contract A {
    function incrementByOne(uint x) public pure returns (uint) {
        return add(x, 1);
    }

    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

contract B {
    function incrementByTwo(uint x) public pure returns (uint) {
        return add(x, 2);
    }

    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

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

contract TestSafeMath {
    // NOTE: demo without using for first
    // NOTE: using for
    // using MyLib for type (attach library functions (from the library A) to type (B)).
    using MySafeMath for uint;

    // NOTE: max uint
    uint public MAX_UINT = 2 ** 256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        // NOTE: library functions will receive the object they are called on as their first parameter
        // NOTE: demo overflow return x + y
        // NOTE:
        // return MySafeMath.add(x, y);
        // NOTE: only second parameter passed;
        return x.add(y);
    }
}

/*
DEMO
NOTE?: only one contract deployed (MySafeMath is embedded)

*/
// TODO: import from open zeppelin



// NOTE: deployed storage
// NOTE: cannot link in Remix

// TODO: slides (insert, iterate)
library IterableMapping {
    struct IMap {
        mapping(address => uint) indexOf;
        mapping(address => bool) inserted;
        address[] values;
    }

    // NOTE: IMap and storage
    // NOTE: not underscored
    // NOTE: public (deployed and linked)
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
    // NOTE: using for
    using IterableMapping for IterableMapping.IMap;

    // NOTE: cannot be public
    IterableMapping.IMap private iMap;

    function testIterableMap() public {
        // NOTE: address must be unique
        // NOTE: first parameter do not need to pass
        iMap.add(address(0));
        // NOTE: IterableMapping.add(iMap, address(0));
        iMap.add(address(1));
        iMap.add(address(2));

        for (uint i = 0; i < iMap.size(); i++) {
            // NOTE: you cannot iterate a map
            assert(iMap.get(i) == address(i));
        }
    }
}

/*
DEMO
NOTE: test iterable map only succeeds once
*/













```

```
pragma solidity ^0.5.16;

/*
Library

Why use libraries?
- DRY (Don't Repeat Yourself)
- Save gas

Embedded or linked
- embedded (library has only internal functions)
- deployed and then linked (library has public or external functions)

Examples
- safe math (embedded, pure internal functions)
- iterable map (functions operating on storage)
*/

library SafeMath {
    function add(uint x, uint y) pure internal returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

contract TestSafeMath {
    // using SomeLib for B (attach functions from SomeLib to type B).
    using SafeMath for uint;
    // x.add(y)

    uint public MAX_UINT = 2 ** 256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        // return MySafeMath.add(x, y);
        return x.add(y);
    }
}





































```
