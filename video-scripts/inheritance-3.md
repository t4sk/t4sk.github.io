- reduce editing
- record video at 200% zoom
- type and speak
- recording single ideas in one video (derek banas)
- edit raw video and then fix audio

# inheritance part 3

- multiple inheritance constructors
- order
- shadowing?

# list topics and examples

# multiple inheritance constructors

- syntax

review single parent

```
contract X {
    string public name;

    constructor(string memory _name) public {
        name = _name;
    }
}

contract B is X("Fixed input") {

}

contract C is X {
    constructor() X("Another way to hard code input") public {

    }
}

contract D is X {
    constructor(string memory _name) D(_name) public {

    }
}
```

multiple parents

```
contract Y {
    string public text;

    constructor(string memory _text) public {
        text = _text;
    }
}

contract B is X("Fixed input"), Y("Another fixed input") {

}

contract C is X, Y {
    // no comma between X, Y
    constructor() X("Fixed input") Y("Another fixed input") public {

    }
}

contract D is X, Y {
    constructor(string memory _name, string memory _text) X(_name) Y(_text) public {

    }
}

```

# order

- order of constructor
  The constructors will always be executed in the linearized order,
  regardless of the order in which their arguments are provided in the
  inheriting contract’s constructor.

```
contract X {
    event Log(string message);

    string public name;

    constructor(string memory _name) public {
        name = _name;
        emit Log(_name);
    }
}

contract Y {
    event Log(string message);
    string public text;

    constructor(string memory _text) public {
        text = _text;
        emit Log(_text);
    }
}

contract B is X("Fixed input"), Y("Another fixed input") {

}

contract C is X, Y {
    // no comma between X, Y
    constructor() X("Fixed input") Y("Another fixed input") public {

    }
}

contract D is X, Y {
    constructor(string memory _name, string memory _text) X(_name) Y(_text) public {

    }
}

contract E is X, Y {
    constructor() X("X was called") Y("Y was called") public {

    }
}

contract F is X, Y {
    constructor() Y("Y was called") X("X was called") public {

    }
}

```

# shadow

```

```
