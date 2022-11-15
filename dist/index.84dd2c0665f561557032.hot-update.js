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

  return {
    get board() {
      return board;
    },
    ships,
    placeShip,
    receiveAttack,
    isDefeated,
    validTargets,
  };
};

const main = function () {
  const Player = gameBoard();
  const Computer = gameBoard();

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

  const move = function (x, y) {
    if (!(Computer.receiveAttack(x, y) == "invalid")) {
      Playermove = !Playermove;
    }

    reloadBoards();
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

let game = main();

const dom = function () {
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
      });
      bar.append(box);
    }
    computerBoard.prepend(bar);
  }

  const reloadBoards = function () {
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
/******/ 	__webpack_require__.h = () => ("37367f39b483d2e9db46")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODRkZDJjMDY2NWY1NjE1NTcwMzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUNJOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTyxhQUFhLE9BQU87QUFDbkQ7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTyxhQUFhLE9BQU87QUFDbkQ7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWlDOzs7Ozs7Ozs7VUNyVmpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9mb250c3R5bGUuY3NzXCI7XG5cbmNvbnN0IHNoaXAgPSBmdW5jdGlvbiAobGVuKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGxlbjtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGNvbnN0IGhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBoaXRzKys7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIGdldCBoaXRzKCkge1xuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIGhpdHMgPj0gbGVuZ3RoO1xuICAgIH0sXG4gICAgaGl0LFxuICB9O1xufTtcblxuY29uc3QgZ2FtZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBib2FyZCA9IHtcbiAgICAxOiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgMzoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA0OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDU6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgNjoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA3OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDg6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgOToge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICAxMDoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgY2FycmllciA9IHNoaXAoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwKDQpO1xuICBjb25zdCBjcnVpc2VyID0gc2hpcCgzKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgzKTtcbiAgY29uc3QgZGVzdHJveWVyID0gc2hpcCgyKTtcblxuICBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG5cbiAgY29uc3QgaXNEZWZlYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKGVhY2hTaGlwKSA9PiB7XG4gICAgICByZXR1cm4gZWFjaFNoaXAuaXNTdW5rO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkVGFyZ2V0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdmFsaWRBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3QgeENvb3JkIGluIGJvYXJkKSB7XG4gICAgICBmb3IgKGNvbnN0IHlDb29yZCBpbiBib2FyZFt4Q29vcmRdKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcImhpdFwiIHx8IGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcIm1pc3NcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRUYXJnZXQgPSBbeENvb3JkLCB5Q29vcmRdO1xuICAgICAgICAgIHZhbGlkQXJyYXkucHVzaCh2YWxpZFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZCwgeUNvb3JkLCBob3Jpem9udGFsID0gdHJ1ZSkge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICBpZiAoeENvb3JkIDw9IDAgfHwgeUNvb3JkIDw9IDAgfHwgeENvb3JkID4gMTAgfHwgeUNvb3JkID4gMTApIHtcbiAgICAgIHJldHVybiBcImludmFsaWQgQ29vcmRpbmF0ZXNcIjtcbiAgICB9XG4gICAgaWYgKCFob3Jpem9udGFsKSB7XG4gICAgICBpZiAoeUNvb3JkICsgc2hpcExlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgICByZXR1cm4gXCJpbnZhbGlkIGNvb3JkaW5hdGVzOiBzaGlwIGRvZXMgbm90IGZpdCBvbiBib2FyZFwiO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCEoYm9hcmRbeENvb3JkXVt5Q29vcmQgKyBpXSA9PSBudWxsKSkge1xuICAgICAgICAgIHJldHVybiBcImludmFsaWQgY29vcmRpbmF0ZXM6IHNoaXAgY29sbGlkZXMgd2l0aCBhbm90aGVyIHNoaXBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmQgKyBpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4Q29vcmQgKyBzaGlwTGVuZ3RoIC0gMSA+IDEwKSB7XG4gICAgICAgIHJldHVybiBcImludmFsaWQgY29vcmRpbmF0ZXM6IHNoaXAgZG9lcyBub3QgZml0IG9uIGJvYXJkXCI7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIShib2FyZFt4Q29vcmQgKyBpXVt5Q29vcmRdID09IG51bGwpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaW52YWxpZCBjb29yZGluYXRlczogc2hpcCBjb2xsaWRlcyB3aXRoIGFub3RoZXIgc2hpcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4Q29vcmQgKyBpXVt5Q29vcmRdID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uICh4Q29vcmQsIHlDb29yZCkge1xuICAgIGlmIChib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gbnVsbCkge1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gXCJtaXNzXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcImhpdFwiIHx8XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdLmhpdCgpO1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gXCJoaXRcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBzaGlwcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0RlZmVhdGVkLFxuICAgIHZhbGlkVGFyZ2V0cyxcbiAgfTtcbn07XG5cbmNvbnN0IG1haW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFBsYXllciA9IGdhbWVCb2FyZCgpO1xuICBjb25zdCBDb21wdXRlciA9IGdhbWVCb2FyZCgpO1xuXG4gIFBsYXllci5wbGFjZVNoaXAoUGxheWVyLnNoaXBzWzBdLCAxLCAxKTtcbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbMV0sIDEsIDMpO1xuICBQbGF5ZXIucGxhY2VTaGlwKFBsYXllci5zaGlwc1syXSwgMSwgNSk7XG4gIFBsYXllci5wbGFjZVNoaXAoUGxheWVyLnNoaXBzWzNdLCAxLCA3KTtcbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbNF0sIDEsIDkpO1xuXG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1swXSwgMSwgMSk7XG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1sxXSwgMSwgMyk7XG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1syXSwgMSwgNSk7XG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1szXSwgMSwgNyk7XG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1s0XSwgMSwgOSk7XG5cbiAgY29uc3QgbW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgaWYgKCEoQ29tcHV0ZXIucmVjZWl2ZUF0dGFjayh4LCB5KSA9PSBcImludmFsaWRcIikpIHtcbiAgICAgIFBsYXllcm1vdmUgPSAhUGxheWVybW92ZTtcbiAgICB9XG5cbiAgICByZWxvYWRCb2FyZHMoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vdmUsXG4gICAgZ2V0IFBsYXllcigpIHtcbiAgICAgIHJldHVybiBQbGF5ZXI7XG4gICAgfSxcbiAgICBnZXQgQ29tcHV0ZXIoKSB7XG4gICAgICByZXR1cm4gQ29tcHV0ZXI7XG4gICAgfSxcbiAgfTtcbn07XG5cbmxldCBnYW1lID0gbWFpbigpO1xuXG5jb25zdCBkb20gPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuICBsZXQgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIik7XG5cbiAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoXCJiYXJcIik7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib3guc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHgpO1xuICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCB5KTtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgICAgYmFyLmFwcGVuZChib3gpO1xuICAgIH1cbiAgICBwbGF5ZXJCb2FyZC5wcmVwZW5kKGJhcik7XG4gIH1cblxuICBmb3IgKGxldCB5ID0gMTsgeSA8PSAxMDsgeSsrKSB7XG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYXIuY2xhc3NMaXN0LmFkZChcImJhclwiKTtcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgeCk7XG4gICAgICBib3guc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIHkpO1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZ2FtZS5tb3ZlKHgsIHkpO1xuICAgICAgfSk7XG4gICAgICBiYXIuYXBwZW5kKGJveCk7XG4gICAgfVxuICAgIGNvbXB1dGVyQm9hcmQucHJlcGVuZChiYXIpO1xuICB9XG5cbiAgY29uc3QgcmVsb2FkQm9hcmRzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbXB1dGVyRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlclwiKTtcbiAgICBmb3IgKGNvbnN0IHhDb29yZCBpbiBnYW1lLkNvbXB1dGVyLmJvYXJkKSB7XG4gICAgICBmb3IgKGNvbnN0IHlDb29yZCBpbiBnYW1lLkNvbXB1dGVyLmJvYXJkW3hDb29yZF0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdhbWUuQ29tcHV0ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwiaGl0XCIgfHxcbiAgICAgICAgICBnYW1lLkNvbXB1dGVyLmJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBkb21Cb3ggPSBjb21wdXRlckRvbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLXg9XCIke3hDb29yZH1cIl1bZGF0YS15PVwiJHt5Q29vcmR9XCJdYFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IG5ld0NsYXNzID0gZ2FtZS5Db21wdXRlci5ib2FyZFt4Q29vcmRdW3lDb29yZF07XG4gICAgICAgICAgZG9tQm94LmNsYXNzTGlzdC5hZGQoYCR7bmV3Q2xhc3N9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGxheWVyRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJcIik7XG4gICAgZm9yIChjb25zdCB4Q29vcmQgaW4gZ2FtZS5QbGF5ZXIuYm9hcmQpIHtcbiAgICAgIGZvciAoY29uc3QgeUNvb3JkIGluIGdhbWUuUGxheWVyLmJvYXJkW3hDb29yZF0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdhbWUuUGxheWVyLmJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcImhpdFwiIHx8XG4gICAgICAgICAgZ2FtZS5QbGF5ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGRvbUJveCA9IHBsYXllckRvbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLXg9XCIke3hDb29yZH1cIl1bZGF0YS15PVwiJHt5Q29vcmR9XCJdYFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IG5ld0NsYXNzID0gZ2FtZS5QbGF5ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdO1xuICAgICAgICAgIGRvbUJveC5jbGFzc0xpc3QuYWRkKGAke25ld0NsYXNzfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxubGV0IG5ld0JvYXJkID0gZG9tKCk7XG5cbmV4cG9ydCB7IHNoaXAsIGdhbWVCb2FyZCwgbWFpbiB9O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzczNjdmMzliNDgzZDJlOWRiNDZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=