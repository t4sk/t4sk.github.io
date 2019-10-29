// Order
//- multiple inheritance
// - order
// - calling parent contracts
// order
// All function calls are virtual, which means that the most derived function is called, except when the contract name is explicitly given or the super keyword is used.
contract A {

}

contract B is A {

}

contract C is A {

}

contract D is B, C {
// todo calling multiple constructors
}

contract E is C, B {

}

// contract F is B, A {

// }

```

```
