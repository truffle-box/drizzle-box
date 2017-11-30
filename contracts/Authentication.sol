pragma solidity ^0.4.2;

import './zeppelin/lifecycle/Killable.sol';

contract Authentication is Killable {
  struct User {
    bytes32 name;
  }

  mapping (address => User) private users;

  uint private id; // Stores user id temporarily

  function login() returns (bytes32) {
    // Check if user exists.
    // If yes, return user.
    // If no, throw.

    if (users[msg.sender].name == 0x0)
    {
        throw;
    }

    return (users[msg.sender].name);
  }

  function signup(bytes32 name) payable returns (bytes32) {
    // Check if user exists.
    // If yes, return user name.
    // If no, check if name was sent.
    // If yes, create and return user.
    // If no, throw.

    if (name == 0x0)
    {
        throw;
    }

    if (users[msg.sender].name == 0x0)
    {
        users[msg.sender].name = name;

        return (users[msg.sender].name);
    }

    return (users[msg.sender].name);
  }

  function update(bytes32 name) payable returns (bytes32) {
    // Update user name.

    if (name == 0x0)
    {
        throw;
    }

    if (users[msg.sender].name != 0x0)
    {
        users[msg.sender].name = name;

        return (users[msg.sender].name);
    }

    throw;
  }
}
