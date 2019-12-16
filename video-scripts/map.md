# remix

- full screen
- 250%
- hide tabs

# intro

- explain mapping
- create
- get
- set
- delete

# map

- what is mapping?

  - collection of data
  - python (dictionary), javascript (map)
  - pros
    - fast look up
      - explain how to find value in array
      - explain how to find value in map
    - unique
      - key => value
  - cons
    - cannot iterate (unlike python, javascript)
    - no size

## example

- create

  - key = value type and value = any type
  - simple example

    - when to use an map
      - check something exists, or check the value of something
      - efficient look up => `mapping(address => uint) public balances;`
      - unique => `mapping(address => bool) public registered;`

  - nested example
  - get
    - no out of bound (default value)
  - update (set)
  - delete (reset to default value)
  - not iterable, no size

```
pragma solidity ^0.5.11;

// Mapping
// - Create a mapping
// - Get value
// - Set value
// - Delete value

contract Mapping {
    mapping(address => uint) public myMap;
    mapping(address => mapping(address => uint)) public nested;

    function get(address _addr) public view returns (uint) {
        return myMap[_addr];
    }

    function set(address _addr, uint _i) public {
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        delete myMap[_addr];
    }
}
```

```
pragma solidity ^0.5.11;

// Mapping
// - Create a mapping
// - Get value
// - Set value
// - Delete value

contract Mapping {

}
```
