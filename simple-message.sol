pragma solidity ^0.5.10;

contract SimpleMessage {
    string myMessage;
    
    function setMessage(string memory x) public {
        myMessage = x;
    }
    
    function getMessage() public view returns (string memory) {
        return myMessage;
    }
}
