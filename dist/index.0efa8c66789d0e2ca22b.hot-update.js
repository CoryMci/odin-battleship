"use strict";
self["webpackHotUpdatewebpack_boilerplate"]("index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fontstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontstyle.css */ "./src/fontstyle.css");



const ship = function (len) {
  const length = len;
  let hits = 0;

  const hit = function () {
    hits++;
  };

  return {
    get length() {
      return length;
    },
    get hits() {
      return hits;
    },
    get isSunk() {
      return hits >= length;
    },
    hit,
  };
};

const gameBoard = function () {
  const board = {
    1: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    2: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    3: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    4: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    5: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    6: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    7: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    8: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    9: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
    10: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
    },
  };
  const carrier = ship(5);
  const battleship = ship(4);
  const cruiser = ship(3);
  const submarine = ship(3);
  const destroyer = ship(2);

  const ships = [carrier, battleship, cruiser, submarine, destroyer];

  const isDefeated = function () {
    return ships.every((eachShip) => {
      return eachShip.isSunk;
    });
  };

  const validTargets = function () {
    let validArray = [];
    for (const xCoord in board) {
      for (const yCoord in board[xCoord]) {
        if (
          !(board[xCoord][yCoord] == "hit" || board[xCoord][yCoord] == "miss")
        ) {
          const validTarget = [xCoord, yCoord];
          validArray.push(validTarget);
        }
      }
    }
    return validArray;
  };

  const placeShip = function (ship, xCoord, yCoord, horizontal = true) {
    const shipLength = ship.length;
    if (xCoord <= 0 || yCoord <= 0 || xCoord > 10 || yCoord > 10) {
      return "invalid Coordinates";
    }
    if (!horizontal) {
      if (yCoord + shipLength - 1 > 10) {
        return "invalid coordinates: ship does not fit on board";
      }
      for (let i = 0; i < shipLength; i++) {
        if (!(board[xCoord][yCoord + i] == null)) {
          return "invalid coordinates: ship collides with another ship";
        }
      }
      for (let i = 0; i < shipLength; i++) {
        board[xCoord][yCoord + i] = ship;
      }
    } else {
      if (xCoord + shipLength - 1 > 10) {
        return "invalid coordinates: ship does not fit on board";
      }
      for (let i = 0; i < shipLength; i++) {
        if (!(board[xCoord + i][yCoord] == null)) {
          return "invalid coordinates: ship collides with another ship";
        }
      }
      for (let i = 0; i < shipLength; i++) {
        board[xCoord + i][yCoord] = ship;
      }
    }
  };

  const receiveAttack = function (xCoord, yCoord) {
    if (board[xCoord][yCoord] == null) {
      board[xCoord][yCoord] = "miss";
    } else if (
      board[xCoord][yCoord] == "hit" ||
      board[xCoord][yCoord] == "miss"
    ) {
      return "invalid";
    } else {
      board[xCoord][yCoord].hit();
      board[xCoord][yCoord] = "hit";
    }
  };

  const receiveRandomAttack = function () {
    const possibleTargets = validTargets();
    const randomCoords =
      possibleTargets[Math.floor(Math.random() * (possibleTargets.length - 1))];
    console.log(randomCoords[0], randomCoords[1]);
    receiveAttack(randomCoords[0], randomCoords[1]);
  };

  return {
    get board() {
      return board;
    },
    ships,
    placeShip,
    receiveAttack,
    isDefeated,
    validTargets,
    receiveRandomAttack,
  };
};

const main = function () {
  const Player = gameBoard();
  const Computer = gameBoard();

  let Playermove = true;

  Player.placeShip(Player.ships[0], 1, 1);
  Player.placeShip(Player.ships[1], 1, 3);
  Player.placeShip(Player.ships[2], 1, 5);
  Player.placeShip(Player.ships[3], 1, 7);
  Player.placeShip(Player.ships[4], 1, 9);

  Computer.placeShip(Computer.ships[0], 1, 1);
  Computer.placeShip(Computer.ships[1], 1, 3);
  Computer.placeShip(Computer.ships[2], 1, 5);
  Computer.placeShip(Computer.ships[3], 1, 7);
  Computer.placeShip(Computer.ships[4], 1, 9);

  const move = function (x = 100, y = 100) {
    if (Playermove) {
      if (!(Computer.receiveAttack(x, y) == "invalid")) {
        // unless user clicks on invalid target,
        Playermove = !Playermove;
        move();
      }
    } else {
      Playermove = !Playermove;
      Player.receiveRandomAttack();
    }
  };

  return {
    move,
    get Player() {
      return Player;
    },
    get Computer() {
      return Computer;
    },
  };
};

const dom = function () {
  let game = main();
  let playerBoard = document.querySelector(".player");
  let computerBoard = document.querySelector(".computer");

  for (let y = 1; y <= 10; y++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    for (let x = 1; x <= 10; x++) {
      let box = document.createElement("div");
      box.setAttribute("data-x", x);
      box.setAttribute("data-y", y);
      box.classList.add("box");
      bar.append(box);
    }
    playerBoard.prepend(bar);
  }

  for (let y = 1; y <= 10; y++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    for (let x = 1; x <= 10; x++) {
      let box = document.createElement("div");
      box.setAttribute("data-x", x);
      box.setAttribute("data-y", y);
      box.classList.add("box");
      box.addEventListener("click", () => {
        game.move(x, y);
        reloadBoards();
      });
      bar.append(box);
    }
    computerBoard.prepend(bar);
  }

  const resetGame = function () {
    game = new main();
  };

  const reloadBoards = function () {
    document.removeEventListener("click", resetGame);
    const alertDom = document.querySelector(".alerts");
    if (game.Player.isDefeated()) {
      alertDom.textContent = "Player 1 is defeated!";
      document.addEventListener("click", resetGame);
    } else if (game.Computer.isDefeated()) {
      alertDom.textContent = "Computer is defeated!";
      document.addEventListener("click", resetGame);
    }

    const computerDom = document.querySelector(".computer");
    for (const xCoord in game.Computer.board) {
      for (const yCoord in game.Computer.board[xCoord]) {
        if (
          game.Computer.board[xCoord][yCoord] == "hit" ||
          game.Computer.board[xCoord][yCoord] == "miss"
        ) {
          const domBox = computerDom.querySelector(
            `[data-x="${xCoord}"][data-y="${yCoord}"]`
          );
          let newClass = game.Computer.board[xCoord][yCoord];
          domBox.classList.add(`${newClass}`);
        }
      }
    }
    const playerDom = document.querySelector(".player");
    for (const xCoord in game.Player.board) {
      for (const yCoord in game.Player.board[xCoord]) {
        if (
          game.Player.board[xCoord][yCoord] == "hit" ||
          game.Player.board[xCoord][yCoord] == "miss"
        ) {
          const domBox = playerDom.querySelector(
            `[data-x="${xCoord}"][data-y="${yCoord}"]`
          );
          let newClass = game.Player.board[xCoord][yCoord];
          domBox.classList.add(`${newClass}`);
        }
      }
    }
  };
};

let newBoard = dom();




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("837d0550e3f47b0dca67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMGVmYThjNjY3ODlkMGUyY2EyMmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUNJOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPLGFBQWEsT0FBTztBQUNuRDtBQUNBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPLGFBQWEsT0FBTztBQUNuRDtBQUNBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFaUM7Ozs7Ozs7OztVQ25YakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2ZvbnRzdHlsZS5jc3NcIjtcblxuY29uc3Qgc2hpcCA9IGZ1bmN0aW9uIChsZW4pIHtcbiAgY29uc3QgbGVuZ3RoID0gbGVuO1xuICBsZXQgaGl0cyA9IDA7XG5cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGhpdHMrKztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0IGhpdHMoKSB7XG4gICAgICByZXR1cm4gaGl0cztcbiAgICB9LFxuICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gaGl0cyA+PSBsZW5ndGg7XG4gICAgfSxcbiAgICBoaXQsXG4gIH07XG59O1xuXG5jb25zdCBnYW1lQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJvYXJkID0ge1xuICAgIDE6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgMjoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICAzOiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDQ6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgNToge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA2OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDc6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgODoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA5OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDEwOiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICB9O1xuICBjb25zdCBjYXJyaWVyID0gc2hpcCg1KTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXAoNCk7XG4gIGNvbnN0IGNydWlzZXIgPSBzaGlwKDMpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwKDMpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwKDIpO1xuXG4gIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcblxuICBjb25zdCBpc0RlZmVhdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoZWFjaFNoaXApID0+IHtcbiAgICAgIHJldHVybiBlYWNoU2hpcC5pc1N1bms7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdmFsaWRUYXJnZXRzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB2YWxpZEFycmF5ID0gW107XG4gICAgZm9yIChjb25zdCB4Q29vcmQgaW4gYm9hcmQpIHtcbiAgICAgIGZvciAoY29uc3QgeUNvb3JkIGluIGJvYXJkW3hDb29yZF0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwiaGl0XCIgfHwgYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwibWlzc1wiKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCB2YWxpZFRhcmdldCA9IFt4Q29vcmQsIHlDb29yZF07XG4gICAgICAgICAgdmFsaWRBcnJheS5wdXNoKHZhbGlkVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsaWRBcnJheTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiAoc2hpcCwgeENvb3JkLCB5Q29vcmQsIGhvcml6b250YWwgPSB0cnVlKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgIGlmICh4Q29vcmQgPD0gMCB8fCB5Q29vcmQgPD0gMCB8fCB4Q29vcmQgPiAxMCB8fCB5Q29vcmQgPiAxMCkge1xuICAgICAgcmV0dXJuIFwiaW52YWxpZCBDb29yZGluYXRlc1wiO1xuICAgIH1cbiAgICBpZiAoIWhvcml6b250YWwpIHtcbiAgICAgIGlmICh5Q29vcmQgKyBzaGlwTGVuZ3RoIC0gMSA+IDEwKSB7XG4gICAgICAgIHJldHVybiBcImludmFsaWQgY29vcmRpbmF0ZXM6IHNoaXAgZG9lcyBub3QgZml0IG9uIGJvYXJkXCI7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIShib2FyZFt4Q29vcmRdW3lDb29yZCArIGldID09IG51bGwpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaW52YWxpZCBjb29yZGluYXRlczogc2hpcCBjb2xsaWRlcyB3aXRoIGFub3RoZXIgc2hpcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4Q29vcmRdW3lDb29yZCArIGldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHhDb29yZCArIHNoaXBMZW5ndGggLSAxID4gMTApIHtcbiAgICAgICAgcmV0dXJuIFwiaW52YWxpZCBjb29yZGluYXRlczogc2hpcCBkb2VzIG5vdCBmaXQgb24gYm9hcmRcIjtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghKGJvYXJkW3hDb29yZCArIGldW3lDb29yZF0gPT0gbnVsbCkpIHtcbiAgICAgICAgICByZXR1cm4gXCJpbnZhbGlkIGNvb3JkaW5hdGVzOiBzaGlwIGNvbGxpZGVzIHdpdGggYW5vdGhlciBzaGlwXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3hDb29yZCArIGldW3lDb29yZF0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gKHhDb29yZCwgeUNvb3JkKSB7XG4gICAgaWYgKGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBudWxsKSB7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPSBcIm1pc3NcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwiaGl0XCIgfHxcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcIm1pc3NcIlxuICAgICkge1xuICAgICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0uaGl0KCk7XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPSBcImhpdFwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlUmFuZG9tQXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHBvc3NpYmxlVGFyZ2V0cyA9IHZhbGlkVGFyZ2V0cygpO1xuICAgIGNvbnN0IHJhbmRvbUNvb3JkcyA9XG4gICAgICBwb3NzaWJsZVRhcmdldHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvc3NpYmxlVGFyZ2V0cy5sZW5ndGggLSAxKSldO1xuICAgIGNvbnNvbGUubG9nKHJhbmRvbUNvb3Jkc1swXSwgcmFuZG9tQ29vcmRzWzFdKTtcbiAgICByZWNlaXZlQXR0YWNrKHJhbmRvbUNvb3Jkc1swXSwgcmFuZG9tQ29vcmRzWzFdKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9LFxuICAgIHNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzRGVmZWF0ZWQsXG4gICAgdmFsaWRUYXJnZXRzLFxuICAgIHJlY2VpdmVSYW5kb21BdHRhY2ssXG4gIH07XG59O1xuXG5jb25zdCBtYWluID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBQbGF5ZXIgPSBnYW1lQm9hcmQoKTtcbiAgY29uc3QgQ29tcHV0ZXIgPSBnYW1lQm9hcmQoKTtcblxuICBsZXQgUGxheWVybW92ZSA9IHRydWU7XG5cbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbMF0sIDEsIDEpO1xuICBQbGF5ZXIucGxhY2VTaGlwKFBsYXllci5zaGlwc1sxXSwgMSwgMyk7XG4gIFBsYXllci5wbGFjZVNoaXAoUGxheWVyLnNoaXBzWzJdLCAxLCA1KTtcbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbM10sIDEsIDcpO1xuICBQbGF5ZXIucGxhY2VTaGlwKFBsYXllci5zaGlwc1s0XSwgMSwgOSk7XG5cbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzBdLCAxLCAxKTtcbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzFdLCAxLCAzKTtcbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzJdLCAxLCA1KTtcbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzNdLCAxLCA3KTtcbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzRdLCAxLCA5KTtcblxuICBjb25zdCBtb3ZlID0gZnVuY3Rpb24gKHggPSAxMDAsIHkgPSAxMDApIHtcbiAgICBpZiAoUGxheWVybW92ZSkge1xuICAgICAgaWYgKCEoQ29tcHV0ZXIucmVjZWl2ZUF0dGFjayh4LCB5KSA9PSBcImludmFsaWRcIikpIHtcbiAgICAgICAgLy8gdW5sZXNzIHVzZXIgY2xpY2tzIG9uIGludmFsaWQgdGFyZ2V0LFxuICAgICAgICBQbGF5ZXJtb3ZlID0gIVBsYXllcm1vdmU7XG4gICAgICAgIG1vdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgUGxheWVybW92ZSA9ICFQbGF5ZXJtb3ZlO1xuICAgICAgUGxheWVyLnJlY2VpdmVSYW5kb21BdHRhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb3ZlLFxuICAgIGdldCBQbGF5ZXIoKSB7XG4gICAgICByZXR1cm4gUGxheWVyO1xuICAgIH0sXG4gICAgZ2V0IENvbXB1dGVyKCkge1xuICAgICAgcmV0dXJuIENvbXB1dGVyO1xuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBkb20gPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBnYW1lID0gbWFpbigpO1xuICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgbGV0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpO1xuXG4gIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKFwiYmFyXCIpO1xuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCB4KTtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgeSk7XG4gICAgICBib3guY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICAgIGJhci5hcHBlbmQoYm94KTtcbiAgICB9XG4gICAgcGxheWVyQm9hcmQucHJlcGVuZChiYXIpO1xuICB9XG5cbiAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoXCJiYXJcIik7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib3guc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHgpO1xuICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCB5KTtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGdhbWUubW92ZSh4LCB5KTtcbiAgICAgICAgcmVsb2FkQm9hcmRzKCk7XG4gICAgICB9KTtcbiAgICAgIGJhci5hcHBlbmQoYm94KTtcbiAgICB9XG4gICAgY29tcHV0ZXJCb2FyZC5wcmVwZW5kKGJhcik7XG4gIH1cblxuICBjb25zdCByZXNldEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZ2FtZSA9IG5ldyBtYWluKCk7XG4gIH07XG5cbiAgY29uc3QgcmVsb2FkQm9hcmRzID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEdhbWUpO1xuICAgIGNvbnN0IGFsZXJ0RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGVydHNcIik7XG4gICAgaWYgKGdhbWUuUGxheWVyLmlzRGVmZWF0ZWQoKSkge1xuICAgICAgYWxlcnREb20udGV4dENvbnRlbnQgPSBcIlBsYXllciAxIGlzIGRlZmVhdGVkIVwiO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0R2FtZSk7XG4gICAgfSBlbHNlIGlmIChnYW1lLkNvbXB1dGVyLmlzRGVmZWF0ZWQoKSkge1xuICAgICAgYWxlcnREb20udGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyIGlzIGRlZmVhdGVkIVwiO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0R2FtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpO1xuICAgIGZvciAoY29uc3QgeENvb3JkIGluIGdhbWUuQ29tcHV0ZXIuYm9hcmQpIHtcbiAgICAgIGZvciAoY29uc3QgeUNvb3JkIGluIGdhbWUuQ29tcHV0ZXIuYm9hcmRbeENvb3JkXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZS5Db21wdXRlci5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIiB8fFxuICAgICAgICAgIGdhbWUuQ29tcHV0ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGRvbUJveCA9IGNvbXB1dGVyRG9tLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEteD1cIiR7eENvb3JkfVwiXVtkYXRhLXk9XCIke3lDb29yZH1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgbmV3Q2xhc3MgPSBnYW1lLkNvbXB1dGVyLmJvYXJkW3hDb29yZF1beUNvb3JkXTtcbiAgICAgICAgICBkb21Cb3guY2xhc3NMaXN0LmFkZChgJHtuZXdDbGFzc31gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwbGF5ZXJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgICBmb3IgKGNvbnN0IHhDb29yZCBpbiBnYW1lLlBsYXllci5ib2FyZCkge1xuICAgICAgZm9yIChjb25zdCB5Q29vcmQgaW4gZ2FtZS5QbGF5ZXIuYm9hcmRbeENvb3JkXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZS5QbGF5ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwiaGl0XCIgfHxcbiAgICAgICAgICBnYW1lLlBsYXllci5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgZG9tQm94ID0gcGxheWVyRG9tLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEteD1cIiR7eENvb3JkfVwiXVtkYXRhLXk9XCIke3lDb29yZH1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgbmV3Q2xhc3MgPSBnYW1lLlBsYXllci5ib2FyZFt4Q29vcmRdW3lDb29yZF07XG4gICAgICAgICAgZG9tQm94LmNsYXNzTGlzdC5hZGQoYCR7bmV3Q2xhc3N9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5sZXQgbmV3Qm9hcmQgPSBkb20oKTtcblxuZXhwb3J0IHsgc2hpcCwgZ2FtZUJvYXJkLCBtYWluIH07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MzdkMDU1MGUzZjQ3YjBkY2E2N1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==