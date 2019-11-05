- multiple inheritance syntax
- overriding
- order
- calling parent contracts
  - explicit
  - super

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

- override function
- order is important

You have to list the parent contracts in the order from “most base-like” to “most derived”.

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

- order is determined by C3 linearization

- Which function is called?
  - Assuming (base -> derived)
  - Another simplifying way to explain this is that when a function is called
    that is defined multiple times in different contracts,
    - the given bases are searched from
    - right to left
    - in a depth-first manner,

```
// right to left
contract C is A, B {

}

// example B does not have foo()

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

# calling parent contracts

How about if you need to call parent functions?

Parent contracts can be called directly, or by using the keyword super.

By using the keyword super, all of the immediate parent contracts will be called.

- detour intro to logging
  - remind that we will go in depth in another video
  - purpose to introduce now?
    - debugging, trace order of functions called by looking at the logs

```
contract A {
    event Log(string message);

    function foo() public {
      emit Log("A.foo called");
    }

    function bar() public {
      emit Log("A.bar called");
    }
}
```

# demo explicit calls

- show inheritance graph

```
contract B is A {
    function foo() public {
        emit Log("B.foo called");
        A.foo();
    }
}

contract C is A {
    function foo() public {
        emit Log("C.foo called");
        A.foo();
    }
}

contract D is B, C {
/   Although D inherits A, B and C, it only called C and then A.
}
```

# demo super

```
contract A {
    event Log(string message);

    function foo() public {
        emit Log("A.foo was called");
    }

    function bar() public {
        emit Log("A.bar called");
    }
}

contract B is A {
    function foo() public {
        emit Log("B.foo called");
        A.foo();
    }

    function bar() public {
        emit Log("B.bar called");
        super.bar();
    }
}

contract C is A {
    function foo() public {
        emit Log("C.foo called");
        A.foo();
    }

    function bar() public {
        emit Log("C.bar called");
        super.bar();
    }
}

contract D is B, C {

}
```

- note order of call C, B, A. super called twice but executed only once

# in this video

- multiple inheritance ordering is important
  - most base like to most derived
  - searches
    - from right to left
    - depth first
- call parent contracts
  - explicitly by parent name Parent.func()
  - using super.func()
