# Connect4
Connect 4 is a two-player game where players take turns to drop colored discs onto a vertical grid. 
The first player to get four discs in a row, horizontally, vertically, or diagonally wins.

## Overview
This is a React Native implementation of the game.
The current implementation only supports local two player sessions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [NodeJS](https://nodejs.org/en/)

Please install node version 13.9.0. You can use [NVM](https://github.com/nvm-sh/nvm) to easily switch between node versions.
The nodeJS installation should also automatically install [NPM](https://www.npmjs.com/) for you

* Expo Client

Please install the Expo Client App on your mobile device.

[IOS](https://apps.apple.com/app/apple-store/id982107779)

[Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

### Installing

Install required dependencies:
Run `npm install`
If installation fails, delete node_modules and package-lock.json and try again

## Running application
Run `npm start`
The following message may pop up: `This command requires Expo CLI. Do you want to install it globally [Y/n]?`
Type `Y` and press enter and the cli will be installed globally for you.
It should open a browser window for you. 
There you can see a QR code. Scan the QR code with the Expo app (Android) or the QR Code Reader (iOS). 

Make sure that the device that you ran expo on and your mobile device are connected to the same wifi network. 
If not, in the web browser you may have to toggle the Connection option from LAN to Tunnel first. 


## Running tests
Run `npm run test`

## Using the application
Tap on any column to place a disc. Each player takes turns until a winner is found.

## Built With
* [React Native](https://reactnative.dev/)

## Areas for Improvement
1) The current implementation does not support an AI opponent.
2) The UI at the moment is quite barebones and does not have any animations. 
In order to implement the animation where the disc is seen to drop into position behind the grid, 
I would need to refactor the grid items to use an svg square with a transparent hole in the middle.
That way I can use z-index to create the effect of the disc going behind the grid.
3) Does not yet support the case where no opponents win the round.
4) The test cases are not exhaustive enough.


## My Other Projects
Check out my ABTesting repo which makes use of React, NodeJS, and GraphQL!
[ABTestingClient](https://github.com/BboyStatix/ABTestingClient)
