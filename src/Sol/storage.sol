pragma solidity ^0.8.16;


contract RegistrarManager {

mapping (address => uint) contribution;

    function addContribution() public {
       contribution[msg.sender] += 1;
    }

    function getContribution() public view returns (uint) {
        return contribution[msg.sender];
    }
}