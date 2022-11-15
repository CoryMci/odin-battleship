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
/******/ 	__webpack_require__.h = () => ("f616cb8840f8e450e1a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzczNjdmMzliNDgzZDJlOWRiNDYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUNJOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTyxhQUFhLE9BQU87QUFDbkQ7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTyxhQUFhLE9BQU87QUFDbkQ7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWlDOzs7Ozs7Ozs7VUN2VmpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9mb250c3R5bGUuY3NzXCI7XG5cbmNvbnN0IHNoaXAgPSBmdW5jdGlvbiAobGVuKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGxlbjtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGNvbnN0IGhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBoaXRzKys7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIGdldCBoaXRzKCkge1xuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIGhpdHMgPj0gbGVuZ3RoO1xuICAgIH0sXG4gICAgaGl0LFxuICB9O1xufTtcblxuY29uc3QgZ2FtZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBib2FyZCA9IHtcbiAgICAxOiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgMzoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA0OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDU6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgNjoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA3OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDg6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgOToge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICAxMDoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgY2FycmllciA9IHNoaXAoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwKDQpO1xuICBjb25zdCBjcnVpc2VyID0gc2hpcCgzKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgzKTtcbiAgY29uc3QgZGVzdHJveWVyID0gc2hpcCgyKTtcblxuICBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG5cbiAgY29uc3QgaXNEZWZlYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKGVhY2hTaGlwKSA9PiB7XG4gICAgICByZXR1cm4gZWFjaFNoaXAuaXNTdW5rO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkVGFyZ2V0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdmFsaWRBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3QgeENvb3JkIGluIGJvYXJkKSB7XG4gICAgICBmb3IgKGNvbnN0IHlDb29yZCBpbiBib2FyZFt4Q29vcmRdKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcImhpdFwiIHx8IGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcIm1pc3NcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRUYXJnZXQgPSBbeENvb3JkLCB5Q29vcmRdO1xuICAgICAgICAgIHZhbGlkQXJyYXkucHVzaCh2YWxpZFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZCwgeUNvb3JkLCBob3Jpem9udGFsID0gdHJ1ZSkge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICBpZiAoeENvb3JkIDw9IDAgfHwgeUNvb3JkIDw9IDAgfHwgeENvb3JkID4gMTAgfHwgeUNvb3JkID4gMTApIHtcbiAgICAgIHJldHVybiBcImludmFsaWQgQ29vcmRpbmF0ZXNcIjtcbiAgICB9XG4gICAgaWYgKCFob3Jpem9udGFsKSB7XG4gICAgICBpZiAoeUNvb3JkICsgc2hpcExlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgICByZXR1cm4gXCJpbnZhbGlkIGNvb3JkaW5hdGVzOiBzaGlwIGRvZXMgbm90IGZpdCBvbiBib2FyZFwiO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCEoYm9hcmRbeENvb3JkXVt5Q29vcmQgKyBpXSA9PSBudWxsKSkge1xuICAgICAgICAgIHJldHVybiBcImludmFsaWQgY29vcmRpbmF0ZXM6IHNoaXAgY29sbGlkZXMgd2l0aCBhbm90aGVyIHNoaXBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmQgKyBpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4Q29vcmQgKyBzaGlwTGVuZ3RoIC0gMSA+IDEwKSB7XG4gICAgICAgIHJldHVybiBcImludmFsaWQgY29vcmRpbmF0ZXM6IHNoaXAgZG9lcyBub3QgZml0IG9uIGJvYXJkXCI7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIShib2FyZFt4Q29vcmQgKyBpXVt5Q29vcmRdID09IG51bGwpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaW52YWxpZCBjb29yZGluYXRlczogc2hpcCBjb2xsaWRlcyB3aXRoIGFub3RoZXIgc2hpcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4Q29vcmQgKyBpXVt5Q29vcmRdID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uICh4Q29vcmQsIHlDb29yZCkge1xuICAgIGlmIChib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gbnVsbCkge1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gXCJtaXNzXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcImhpdFwiIHx8XG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdLmhpdCgpO1xuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gXCJoaXRcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBzaGlwcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0RlZmVhdGVkLFxuICAgIHZhbGlkVGFyZ2V0cyxcbiAgfTtcbn07XG5cbmNvbnN0IG1haW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFBsYXllciA9IGdhbWVCb2FyZCgpO1xuICBjb25zdCBDb21wdXRlciA9IGdhbWVCb2FyZCgpO1xuXG4gIGxldCBQbGF5ZXJtb3ZlID0gdHJ1ZTtcblxuICBQbGF5ZXIucGxhY2VTaGlwKFBsYXllci5zaGlwc1swXSwgMSwgMSk7XG4gIFBsYXllci5wbGFjZVNoaXAoUGxheWVyLnNoaXBzWzFdLCAxLCAzKTtcbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbMl0sIDEsIDUpO1xuICBQbGF5ZXIucGxhY2VTaGlwKFBsYXllci5zaGlwc1szXSwgMSwgNyk7XG4gIFBsYXllci5wbGFjZVNoaXAoUGxheWVyLnNoaXBzWzRdLCAxLCA5KTtcblxuICBDb21wdXRlci5wbGFjZVNoaXAoQ29tcHV0ZXIuc2hpcHNbMF0sIDEsIDEpO1xuICBDb21wdXRlci5wbGFjZVNoaXAoQ29tcHV0ZXIuc2hpcHNbMV0sIDEsIDMpO1xuICBDb21wdXRlci5wbGFjZVNoaXAoQ29tcHV0ZXIuc2hpcHNbMl0sIDEsIDUpO1xuICBDb21wdXRlci5wbGFjZVNoaXAoQ29tcHV0ZXIuc2hpcHNbM10sIDEsIDcpO1xuICBDb21wdXRlci5wbGFjZVNoaXAoQ29tcHV0ZXIuc2hpcHNbNF0sIDEsIDkpO1xuXG4gIGNvbnN0IG1vdmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIGlmICghKENvbXB1dGVyLnJlY2VpdmVBdHRhY2soeCwgeSkgPT0gXCJpbnZhbGlkXCIpKSB7XG4gICAgICBQbGF5ZXJtb3ZlID0gIVBsYXllcm1vdmU7XG4gICAgfVxuXG4gICAgcmVsb2FkQm9hcmRzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb3ZlLFxuICAgIGdldCBQbGF5ZXIoKSB7XG4gICAgICByZXR1cm4gUGxheWVyO1xuICAgIH0sXG4gICAgZ2V0IENvbXB1dGVyKCkge1xuICAgICAgcmV0dXJuIENvbXB1dGVyO1xuICAgIH0sXG4gIH07XG59O1xuXG5sZXQgZ2FtZSA9IG1haW4oKTtcblxuY29uc3QgZG9tID0gZnVuY3Rpb24gKCkge1xuICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgbGV0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpO1xuXG4gIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKFwiYmFyXCIpO1xuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCB4KTtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgeSk7XG4gICAgICBib3guY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICAgIGJhci5hcHBlbmQoYm94KTtcbiAgICB9XG4gICAgcGxheWVyQm9hcmQucHJlcGVuZChiYXIpO1xuICB9XG5cbiAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoXCJiYXJcIik7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib3guc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHgpO1xuICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCB5KTtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGdhbWUubW92ZSh4LCB5KTtcbiAgICAgIH0pO1xuICAgICAgYmFyLmFwcGVuZChib3gpO1xuICAgIH1cbiAgICBjb21wdXRlckJvYXJkLnByZXBlbmQoYmFyKTtcbiAgfVxuXG4gIGNvbnN0IHJlbG9hZEJvYXJkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb21wdXRlckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIik7XG4gICAgZm9yIChjb25zdCB4Q29vcmQgaW4gZ2FtZS5Db21wdXRlci5ib2FyZCkge1xuICAgICAgZm9yIChjb25zdCB5Q29vcmQgaW4gZ2FtZS5Db21wdXRlci5ib2FyZFt4Q29vcmRdKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnYW1lLkNvbXB1dGVyLmJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcImhpdFwiIHx8XG4gICAgICAgICAgZ2FtZS5Db21wdXRlci5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgZG9tQm94ID0gY29tcHV0ZXJEb20ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS14PVwiJHt4Q29vcmR9XCJdW2RhdGEteT1cIiR7eUNvb3JkfVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBuZXdDbGFzcyA9IGdhbWUuQ29tcHV0ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdO1xuICAgICAgICAgIGRvbUJveC5jbGFzc0xpc3QuYWRkKGAke25ld0NsYXNzfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBsYXllckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuICAgIGZvciAoY29uc3QgeENvb3JkIGluIGdhbWUuUGxheWVyLmJvYXJkKSB7XG4gICAgICBmb3IgKGNvbnN0IHlDb29yZCBpbiBnYW1lLlBsYXllci5ib2FyZFt4Q29vcmRdKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnYW1lLlBsYXllci5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIiB8fFxuICAgICAgICAgIGdhbWUuUGxheWVyLmJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBkb21Cb3ggPSBwbGF5ZXJEb20ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS14PVwiJHt4Q29vcmR9XCJdW2RhdGEteT1cIiR7eUNvb3JkfVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBuZXdDbGFzcyA9IGdhbWUuUGxheWVyLmJvYXJkW3hDb29yZF1beUNvb3JkXTtcbiAgICAgICAgICBkb21Cb3guY2xhc3NMaXN0LmFkZChgJHtuZXdDbGFzc31gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmxldCBuZXdCb2FyZCA9IGRvbSgpO1xuXG5leHBvcnQgeyBzaGlwLCBnYW1lQm9hcmQsIG1haW4gfTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY2MTZjYjg4NDBmOGU0NTBlMWE1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9