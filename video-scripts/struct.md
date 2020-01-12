# struct

```
pragma solidity ^0.5.12;

contract Todos {
    // NOTE: intro without struct
    string[] public _todos;
    mapping(uint => bool) completed;

    // create
    // read
    // update

    struct Todo {
        string text;
        bool completed;
        uint createdAt;
        // string[] tags;
    }

    Todo[] public todos;

    function create(string memory _text) public {
        // NOTE: 3 ways to init (positional, key value, memory)
        // NOTE: order matters and less readable
        todos.push(Todo(_text, false, block.timestamp));

        // NOTE: order does not matter and more readable
        todos.push(Todo({
            text: _text,
            completed: false,
            createdAt: block.timestamp
        }));

        // NOTE: better choice for struct with complex data
        Todo memory todo;
        todo.text = _text;
        // todo.completed initialized to false
        todo.createdAt = block.timestamp;

        todos.push(todo);
    }

    function get(uint _index)
        public
        view
        // NOTE: cannot return (Todo)
        // NOTE: naming outputs
        returns (string memory text, bool completed, uint createdAt)
    {
        // NOTE: about storage
        // NOTE: explain what happens if memory
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed, todo.createdAt);
    }

    function update(uint _index, string memory _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }

    // NOTE: don't need bool parameter
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}

// DEMO
// create couple todos
// get todo
// todos (getter created by solidity)
// update
// get
// toggleCompleted
// get

// NOTE: about nested struct (array of struct inside a struct)

```

```
pragma solidity ^0.5.12;

contract Todos {
    // Structs
    // create
    // read
    // update

    struct Todo {
        string text;
        bool completed;
    }

    Todo[] public todos;

    function create(string memory _text) public {
        todos.push(Todo(_text, false));
    }

    function get(uint _index) public view
        returns (string memory text, bool completed)
    {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }

    // update text
    function update(uint _index, string memory _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }
    // update completed
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
```
