```
pragma solidity ^0.5.16;

/*
Keccak256 (Cryptographic Hash Function)
- what is it?
    - function that takes in arbitrary size input and outputs a data of fixed size
    - properties
        - deterministic
            - hash(x) = h
        - quick to compute the hash
        - irreversible
            - given h, hard to find x such that hash(x) = h
        - small change in input changes the output
        - collision resistant
            - hard to find x, y such that hash(x) = hash(y)
Example
- guessing game pseudo random
    - collision with dynamic sized inputs
*/
contract HashFunc {
    function hash(string memory _text, uint _num, address _addr) public pure returns (bytes32) {
        // NOTE: abi.encodePacked can take arbitrary number of inputs and of different types
        return keccak256(abi.encodePacked(_text, _num, _addr));
    }

    // DEMO changing hash

    bytes32 public answer = 0x5dbe7b4dfbf4dd3df915da98eaa461f0850170928709c3d402cba0ca272e01d9;

    function guess(string memory _text) public view returns (bool) {
        return keccak256(abi.encodePacked(_text)) == answer;
    }

    function collision(string memory _text, string memory _anotherText) public pure returns (bytes32) {
        return keccak256(abi.encode(_text, _anotherText));
    }

    function encode(string memory _a, string memory _b) public pure returns (bytes memory) {
        return abi.encode(_a, _b);
    }

    function encodePacked(string memory _a, string memory _b) public pure returns (bytes memory) {
        return abi.encodePacked(_a, _b);
    }
    // DEMO abi.encodePacked and abi.encode
}
```

```
pragma solidity ^0.5.16;

/*
Keccak256 (Cryptographic Hash Function)
- what is it?
    - function that takes in arbitrary size input and outputs a data of fixed size
    - properties
        - deterministic
            - hash(x) = h, every time
        - quick to compute the hash
        - irreversible
            - given h, hard to find x such that hash(x) = h
        - small change in input changes the output significantly
        - collision resistant
            - hard to find x, y such that hash(x) = hash(y)

Example
- guessing game (pseudo random)

*/

contract HashFunction {
    function hash(string memory _text, uint _num, address _addr)
        public pure returns (bytes32)
    {
        return keccak256(abi.encodePacked(_text, _num, _addr));
    }

    function collision(string memory _text, string memory _anotherText)
        public pure returns (bytes32)
    {
        // AAA BBB -> AAABBB
        // AA ABBB -> AAABBB
        return keccak256(abi.encode(_text, _anotherText));
    }
}

contract GuessTheMagicWord {
    bytes32 public answer =
        0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00;

    function guess(string memory _word) public view returns (bool) {
        return keccak256(abi.encodePacked(_word)) == answer;
    }
}














```
