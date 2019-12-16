# Setup

- 250%
- hide tabs
- full screen

# topics

- compile time fixed
- dynamic size
- initialization

length
push
pop

Deleting an element creates a gap in the array.
One trick to keep the array compact is to move the last element into the place to delete.

# Declaring Arrays (dynamic and fixed size)

- compile time fixed
- dynamic size
- initialization
- solidity creates public getters
- index out of bounds
- demo getting fixed size array element

# Push, Pop and Length

- push element to end of array
- pop element from end of array
  - cannot pop if array is empty
- length

# Removing element from an array

- remove
  - note index out of bounds

# Compact array

Deleting an element creates a gap in the array.
One trick to keep the array compact is to move the last element into the place to delete.

- case removing element from middle
- case removing index out of bound -> error
- case zero element -> error
- case removing element from end -> copy element to end and pop (OK)

```
pragma solidity ^0.5.11;

// Examples
// - How to write an array
// - Push, pop and length
// - Removing elements from an array

contract Array {
    uint[] public myArray;
    uint[] public myArray2 = [1,2,3];

    uint[10] public myFixedSizeArray;

    function get(uint i) public view returns (uint) {
      return myArray[i];
    }

    function push(uint i) public {
        myArray.push(i);
    }

    function pop() public {
        myArray.pop();
    }

    function getLength() public view returns (uint) {
        return myArray.length;
    }

    function remove(uint index) public {
        delete myArray[index];
    }
}

contract CompactArray {
    uint[] public myArray;

    function remove(uint index) public {
        myArray[index] = myArray[myArray.length - 1];
        myArray.pop();
    }

    function test() public {
        myArray.push(1);
        myArray.push(2);
        myArray.push(3);
        myArray.push(4);
        // [1, 2, 3, 4]

        remove(1);
        // [1, 4, 3]

        assert(myArray.length == 3);
        assert(myArray[0] == 1);
        assert(myArray[1] == 4);
        assert(myArray[2] == 3);

        remove(2);
        // [1, 4]

        assert(myArray.length == 2);
        assert(myArray[0] == 1);
        assert(myArray[1] == 4);
    }
}

```

```
pragma solidity ^0.5.11;

// Examples
// - How to write an array
// - Push, pop and length
// - Removing elements from an array

contract Array {
    uint[] public myArray;
    uint[] public myArray2 = [1, 2, 3];
    uint[10] public myFixedSizeArray;
}
```
