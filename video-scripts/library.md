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
Embedded or linked
- embedded (library has only internal functions)
- must be deployed and then linked (library has public or external functions)

Examples
- safe math (embedded, pure internal functions)
- iterable map (functions operating on storage)
*/

// NOTE: pure and embedded
library SafeMath {
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
    using SafeMath for uint;

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

library Array {
    function remove(uint[] storage arr, uint index) public {
        arr[index] = arr[arr.length - 1];
        arr.pop();
    }
}

contract TestArray {
    using Array for uint[];

    uint[] public arr;

    function testArrayRemove() public {
        for (uint i = 0; i < 3; i++) {
            arr.push(i);
        }

        arr.remove(1);

        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
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
    // mapping(address => uint) balances;
    struct Map {
        address[] keys;
        mapping(address => uint) values;
        mapping(address => uint) indexOf;
        mapping(address => bool) inserted;
    }

    // NOTE: Map and storage
    // NOTE: not underscored
    // NOTE: public (deployed and linked)
    function set(Map storage map, address key, uint val) public {
        if (map.inserted[key]) {
            map.values[key] = val;
        } else {
            map.inserted[key] = true;
            map.values[key] = val;
            map.indexOf[key] = map.keys.length;
            map.keys.push(key);
        }
    }

    function get(Map storage map, address key) public view returns (uint) {
        return map.values[key];
    }

    function remove(Map storage map, address key) public {
        if (!map.inserted[key]) {
            return;
        }

        delete map.inserted[key];
        delete map.values[key];

        uint index = map.indexOf[key];
        uint lastIndex = map.keys.length - 1;
        address lastKey = map.keys[lastIndex];

        map.indexOf[lastKey] = index;
        delete map.indexOf[key];

        map.keys[index] = lastKey;
        map.keys.pop();
    }

    function size(Map storage map) public view returns (uint) {
        return map.keys.length;
    }

    function getKeyAtIndex(Map storage map, uint index) public view returns (address) {
        return map.keys[index];
    }
}

contract TestIterableMap {
    // NOTE: using for
    using IterableMapping for IterableMapping.Map;

    // NOTE: cannot be public
    IterableMapping.Map private map;

    function testIterableMap() public {
        // NOTE: address must be unique
        // NOTE: first parameter do not need to pass
        map.set(address(0), 0);
        // NOTE: IterableMapping.add(iMap, address(0));
        map.set(address(1), 100);
        map.set(address(2), 200);

        for (uint i = 0; i < map.size(); i++) {
            // NOTE: you cannot iterate a map
            address key = map.getKeyAtIndex(i);

            assert(map.get(key) == i * 100);
        }
    }
}

/*
DEMO
*/
```

```
pragma solidity ^0.5.16;

/*
using A for B (add functions of libary A to type B)

embedded - all lib functions are internal
linked - library functions are public or external
    - can save gas
*/

/*
Library
- no storage, no ether
- helps you keep your code DRY (Don't Repeat Yourself)
    - add functionality types
    // uint x
    // x.myFuncFromLibrary()
- Can save gas

Embedded or linked
- embedded (library has only internal functions)
- must be deployed and then linked (library has public or external functions)

Examples
- safe math (prevent uint overflow)
- deleting element from array without gaps
*/

library SafeMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

contract TestSafeMath {
    using SafeMath for uint;
    // using A for B
    // attach functions from library A to type B

    uint public MAX_UINT = 2 ** 256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        return x.add(y);
    }
}

library Array {
    function remove(uint[] storage arr, uint index) public {
        arr[index] = arr[arr.length - 1];
        arr.pop();
    }
}

contract TestArray {
    using Array for uint[];

    uint[] public arr;

    function testArrayRemove() public {
        for (uint i = 0; i < 3; i++) {
            arr.push(i);
        }
        // [0, 1, 2]

        arr.remove(1);

        // [0, 2]
        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
    }
}




































```
