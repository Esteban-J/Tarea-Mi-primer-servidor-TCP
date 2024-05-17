# Práctica | Mi primer servidor TCP

This is an application that, through network manipulation, creates a server where several clients can connect and share messages with each other.

## Getting Started

You can click the followin link to download the app source code files: https://github.com/Esteban-J/Tarea-Mi-primer-servidor-TCP/archive/refs/heads/main.zip

### Prerequisites

To be able to run and test the code above you'll need to have NodeJs already install in your system as this code is interpreted by the Node run-time enviorement.

```

### Installing

####Installing Node

For Linux (using apt package manager, for Ubuntu/Debian):
```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

For macOS (using Homebrew):
```
brew update
brew install node
```

For Windows (using Chocolatey):
```
choco install nodejs
```

## Running a test
To execute  a test of the application you'll have to use three or more separate command line terminals

In one of them run the server.js script with the node command:
```
node server.js
```
A server will be created and clintes will be able to connect to it.

In the other terminals run the clien.js script, as many clients as you desire to have.
```
node client.js
```
The full aplication will be then completely up and running for a test. Just write a message you want to send to the other clients and whatch the aplication in action.

## Built With

* javaSript
* NodeJs

## Authors

* **Jurado Carrera Gerardo Esteban**

## Acknowledgments

* Ramírez Martínez Luis Antonio

