
pragma solidity ^0.5.11;

/*
Contract that creates other contracts

Examples
- create a new contract
- send ether and create a new contract

How is it useful?
- pass fixed inputs to a new contract
- manage many contracts from a single contract
*/

contract Car {
    string public model;
    address public owner;

    constructor(string memory _model, address _owner) public payable {
        model = _model;
        owner = _owner;
    }
}

contract CarFactory {
    // NOTE: array declartion
    Car[] public cars;

    function create(address _owner, string memory _model) public {
        // NOTE: new keyword
        // NOTE: difference between new and not new
        // NOTE: owner of the car == factory
        Car car = new Car(_model, _owner);
        cars.push(car);
    }

    // NOTE: payable
    function createAndSendEther(address _owner, string memory _model) public payable {
        // NOTE: contract.func.value() contract.constructor.value()()
        Car car = (new Car).value(msg.value)(_model, _owner);
        cars.push(car);
    }

    // NOTE: named return outputs
    function getCar(uint _index) public view returns (address owner, string memory model, uint balance) {
        // NOTE: throws error if index out of bound
        Car car = cars[_index];

        // NOTE: function calls
        // NOTE: casting contract to addresss and get balance
        return (car.owner(), car.model(), address(car).balance);
    }
}

/*
NOTE: explain factory
NOTE: How is it useful?
- pass fixed inputs to a new contract (change code owner => address(this))
- manage many contracts from a single contract (add cars.push and getCar()
*/

/* DEMO
*/
