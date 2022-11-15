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
/******/ 	__webpack_require__.h = () => ("11ef2eaf993415ef9782")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjA3MzIyOWRhNjlhZWVhNzhlZjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUNJOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sYUFBYSxPQUFPO0FBQ25EO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sYUFBYSxPQUFPO0FBQ25EO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVpQzs7Ozs7Ozs7O1VDclZqQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vZm9udHN0eWxlLmNzc1wiO1xuXG5jb25zdCBzaGlwID0gZnVuY3Rpb24gKGxlbikge1xuICBjb25zdCBsZW5ndGggPSBsZW47XG4gIGxldCBoaXRzID0gMDtcblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaGl0cysrO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH0sXG4gICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgIHJldHVybiBoaXRzID49IGxlbmd0aDtcbiAgICB9LFxuICAgIGhpdCxcbiAgfTtcbn07XG5cbmNvbnN0IGdhbWVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYm9hcmQgPSB7XG4gICAgMToge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICAyOiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDM6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgNDoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA1OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDY6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgNzoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA4OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDk6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgMTA6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IGNhcnJpZXIgPSBzaGlwKDUpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcCg0KTtcbiAgY29uc3QgY3J1aXNlciA9IHNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXAoMyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoMik7XG5cbiAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuXG4gIGNvbnN0IGlzRGVmZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChlYWNoU2hpcCkgPT4ge1xuICAgICAgcmV0dXJuIGVhY2hTaGlwLmlzU3VuaztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB2YWxpZFRhcmdldHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHZhbGlkQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHhDb29yZCBpbiBib2FyZCkge1xuICAgICAgZm9yIChjb25zdCB5Q29vcmQgaW4gYm9hcmRbeENvb3JkXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIiB8fCBib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHZhbGlkVGFyZ2V0ID0gW3hDb29yZCwgeUNvb3JkXTtcbiAgICAgICAgICB2YWxpZEFycmF5LnB1c2godmFsaWRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChzaGlwLCB4Q29vcmQsIHlDb29yZCwgaG9yaXpvbnRhbCA9IHRydWUpIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgaWYgKHhDb29yZCA8PSAwIHx8IHlDb29yZCA8PSAwIHx8IHhDb29yZCA+IDEwIHx8IHlDb29yZCA+IDEwKSB7XG4gICAgICByZXR1cm4gXCJpbnZhbGlkIENvb3JkaW5hdGVzXCI7XG4gICAgfVxuICAgIGlmICghaG9yaXpvbnRhbCkge1xuICAgICAgaWYgKHlDb29yZCArIHNoaXBMZW5ndGggLSAxID4gMTApIHtcbiAgICAgICAgcmV0dXJuIFwiaW52YWxpZCBjb29yZGluYXRlczogc2hpcCBkb2VzIG5vdCBmaXQgb24gYm9hcmRcIjtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghKGJvYXJkW3hDb29yZF1beUNvb3JkICsgaV0gPT0gbnVsbCkpIHtcbiAgICAgICAgICByZXR1cm4gXCJpbnZhbGlkIGNvb3JkaW5hdGVzOiBzaGlwIGNvbGxpZGVzIHdpdGggYW5vdGhlciBzaGlwXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkICsgaV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeENvb3JkICsgc2hpcExlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgICByZXR1cm4gXCJpbnZhbGlkIGNvb3JkaW5hdGVzOiBzaGlwIGRvZXMgbm90IGZpdCBvbiBib2FyZFwiO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCEoYm9hcmRbeENvb3JkICsgaV1beUNvb3JkXSA9PSBudWxsKSkge1xuICAgICAgICAgIHJldHVybiBcImludmFsaWQgY29vcmRpbmF0ZXM6IHNoaXAgY29sbGlkZXMgd2l0aCBhbm90aGVyIHNoaXBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeENvb3JkICsgaV1beUNvb3JkXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiAoeENvb3JkLCB5Q29vcmQpIHtcbiAgICBpZiAoYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IG51bGwpIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9IFwibWlzc1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIiB8fFxuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwibWlzc1wiXG4gICAgKSB7XG4gICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXS5oaXQoKTtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9IFwiaGl0XCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG4gICAgc2hpcHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNEZWZlYXRlZCxcbiAgICB2YWxpZFRhcmdldHMsXG4gIH07XG59O1xuXG5jb25zdCBtYWluID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBQbGF5ZXIgPSBnYW1lQm9hcmQoKTtcbiAgY29uc3QgQ29tcHV0ZXIgPSBnYW1lQm9hcmQoKTtcblxuICBsZXQgUGxheWVybW92ZSA9IHRydWU7XG5cbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbMF0sIDEsIDEpO1xuICBQbGF5ZXIucGxhY2VTaGlwKFBsYXllci5zaGlwc1sxXSwgMSwgMyk7XG4gIFBsYXllci5wbGFjZVNoaXAoUGxheWVyLnNoaXBzWzJdLCAxLCA1KTtcbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbM10sIDEsIDcpO1xuICBQbGF5ZXIucGxhY2VTaGlwKFBsYXllci5zaGlwc1s0XSwgMSwgOSk7XG5cbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzBdLCAxLCAxKTtcbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzFdLCAxLCAzKTtcbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzJdLCAxLCA1KTtcbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzNdLCAxLCA3KTtcbiAgQ29tcHV0ZXIucGxhY2VTaGlwKENvbXB1dGVyLnNoaXBzWzRdLCAxLCA5KTtcblxuICBjb25zdCBtb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBpZiAoIShDb21wdXRlci5yZWNlaXZlQXR0YWNrKHgsIHkpID09IFwiaW52YWxpZFwiKSkge1xuICAgICAgUGxheWVybW92ZSA9ICFQbGF5ZXJtb3ZlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vdmUsXG4gICAgZ2V0IFBsYXllcigpIHtcbiAgICAgIHJldHVybiBQbGF5ZXI7XG4gICAgfSxcbiAgICBnZXQgQ29tcHV0ZXIoKSB7XG4gICAgICByZXR1cm4gQ29tcHV0ZXI7XG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IGRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGdhbWUgPSBtYWluKCk7XG4gIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuICBsZXQgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIik7XG5cbiAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoXCJiYXJcIik7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib3guc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHgpO1xuICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCB5KTtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgICAgYmFyLmFwcGVuZChib3gpO1xuICAgIH1cbiAgICBwbGF5ZXJCb2FyZC5wcmVwZW5kKGJhcik7XG4gIH1cblxuICBmb3IgKGxldCB5ID0gMTsgeSA8PSAxMDsgeSsrKSB7XG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYXIuY2xhc3NMaXN0LmFkZChcImJhclwiKTtcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgeCk7XG4gICAgICBib3guc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIHkpO1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZ2FtZS5tb3ZlKHgsIHkpO1xuICAgICAgICByZWxvYWRCb2FyZHMoKTtcbiAgICAgIH0pO1xuICAgICAgYmFyLmFwcGVuZChib3gpO1xuICAgIH1cbiAgICBjb21wdXRlckJvYXJkLnByZXBlbmQoYmFyKTtcbiAgfVxuXG4gIGNvbnN0IHJlbG9hZEJvYXJkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb21wdXRlckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIik7XG4gICAgZm9yIChjb25zdCB4Q29vcmQgaW4gZ2FtZS5Db21wdXRlci5ib2FyZCkge1xuICAgICAgZm9yIChjb25zdCB5Q29vcmQgaW4gZ2FtZS5Db21wdXRlci5ib2FyZFt4Q29vcmRdKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnYW1lLkNvbXB1dGVyLmJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcImhpdFwiIHx8XG4gICAgICAgICAgZ2FtZS5Db21wdXRlci5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgZG9tQm94ID0gY29tcHV0ZXJEb20ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS14PVwiJHt4Q29vcmR9XCJdW2RhdGEteT1cIiR7eUNvb3JkfVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBuZXdDbGFzcyA9IGdhbWUuQ29tcHV0ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdO1xuICAgICAgICAgIGRvbUJveC5jbGFzc0xpc3QuYWRkKGAke25ld0NsYXNzfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBsYXllckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuICAgIGZvciAoY29uc3QgeENvb3JkIGluIGdhbWUuUGxheWVyLmJvYXJkKSB7XG4gICAgICBmb3IgKGNvbnN0IHlDb29yZCBpbiBnYW1lLlBsYXllci5ib2FyZFt4Q29vcmRdKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnYW1lLlBsYXllci5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIiB8fFxuICAgICAgICAgIGdhbWUuUGxheWVyLmJvYXJkW3hDb29yZF1beUNvb3JkXSA9PSBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBkb21Cb3ggPSBwbGF5ZXJEb20ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS14PVwiJHt4Q29vcmR9XCJdW2RhdGEteT1cIiR7eUNvb3JkfVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBuZXdDbGFzcyA9IGdhbWUuUGxheWVyLmJvYXJkW3hDb29yZF1beUNvb3JkXTtcbiAgICAgICAgICBkb21Cb3guY2xhc3NMaXN0LmFkZChgJHtuZXdDbGFzc31gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmxldCBuZXdCb2FyZCA9IGRvbSgpO1xuXG5leHBvcnQgeyBzaGlwLCBnYW1lQm9hcmQsIG1haW4gfTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjExZWYyZWFmOTkzNDE1ZWY5NzgyXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9