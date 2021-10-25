# 🧮 Kalkulator
*A simple calculator built with ReactJS* ([demo](https://kiendt07.github.io/kalkulator/))
[![Image from Gyazo](https://i.gyazo.com/bdd037c86772da93e5f18c38427ce7b5.gif)](https://gyazo.com/bdd037c86772da93e5f18c38427ce7b5)
## Features
- Multiple operand expressions (eg: `3 + 5 * 6 - 2`), follow BODMAS rule
- Support decimal number (eg: `3.5 * 2`)
## Data structure & Algorithm
Using [Shunting-yard](https://en.wikipedia.org/wiki/Shunting-yard_algorithm) algorithm with Stack
## Highlights
- Using Object Oriented design for extensibility
- Error handling in place
- Context of the error is available (position), easy to add error-friendly features
- CI/CD with Jest and Github Action, hosted on Github Pages

## How to start
1. `npm install`
2. `npm start`
3. Open `http://localhost:3000` in your browser

## Backlog
- Integration test
- Support parenthess
- Support more operators (unary: -X, binary: sin, max, etc)
- User-friendly error message
- Syntax analysis on the fly
- Store and display expression history
