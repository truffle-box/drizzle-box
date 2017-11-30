pragma solidity ^0.4.18;

contract SimpleStorage {
  uint public storedData;

  function set(uint x) {
    storedData = x;
  }
}
