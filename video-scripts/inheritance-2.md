- multiple inheritance syntax
- shadowing?
- multiple inheritance constructors
- order
- calling parent contracts
- shadowing?

# multiple inheritance syntax

```
contract A {

}

contract B {

}

contract C is A, B {

}
```

## calling functions from A and B

```
contract A {
    function foo() public pure returns (string memory) {
        return "A";
    }
}

contract B {
    function bar() public pure returns (string memory) {
        return "B";
    }
}

contract C is A, B {

}
```

## overriding a function

- demo calling functions
- order is important

```
contract A {
    function foo() public pure returns (string memory) {
        return "A";
    }
}

contract B {
    function foo() public pure returns (string memory) {
        return "B";
    }
}

contract C is A, B {
}

contract C is B, A {
}
```

- how should you order it?
- most base like to most derived

```
contract A {
    function foo() public pure returns (string memory) {
        return "A";
    }
}

contract B {
    function foo() public pure returns (string memory) {
        return "B";
    }
}

contract C is A, B {
}

contract D is A, C {

}

// does not compile
contract D is C, A {

}
```

- Which function is called?
  - Assuming (base -> derived)
  - Another simplifying way to explain this is that when a function is called
    that is defined multiple times in different contracts,
    - the given bases are searched from
    - right to left
    - in a depth-first manner,

```
// left to right
contract C is A, B {

}

contract C is B, A {

}
```

```
// depth first
contract B {
    <!-- function foo() public pure returns (string memory) {
        return "B";
    } -->
}


contract C is A, B {}

contract D is A, C {}
```

- re emphasize base to derived

```
contract X {
    function foo() public pure returns (string memory) {
        return "X";
    }
}

contract E is A, X {}
contract F is C, E {}
```

# calling parent contracts

All function calls are virtual, which means that the most derived function
is called, except when the contract name is explicitly given or the
super keyword is used.

```


```

# inheritance part 3?

# multiple inheritance constructors

## demo (fixed value and passing variables)

```
contract A {
  string public name;

  constructor(string memory _name) public {
    name = _name;
  }
}

contract B {
  string public name;

  constructor(string memory _name) public {
    name = _name;
  }
}

contract C is A, B {
  constructor(string memory _name) A(_name) B(_name) public {
    name = _name;
  }
}

```

# shadow

# order of constructor

The constructors will always be executed in the linearized order,
regardless of the order in which their arguments are provided in the
inheriting contract’s constructor.

```
contract A {

}

contract B {

}

contract C is A, B {
  constructor() A() B() public {

  }
}
```
