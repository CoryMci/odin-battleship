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

  const move = function (x, y) {
    if (Playermove) {
      if (!(Computer.receiveAttack(x, y) == "invalid")) {
        Playermove = !Playermove;
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
/******/ 	__webpack_require__.h = () => ("7bbfca5f7b3d11ad6458")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTJhZDYxNjg4N2ViNWIxODg0NTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjtBQUNJOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sYUFBYSxPQUFPO0FBQ25EO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sYUFBYSxPQUFPO0FBQ25EO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVpQzs7Ozs7Ozs7O1VDbFdqQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vZm9udHN0eWxlLmNzc1wiO1xuXG5jb25zdCBzaGlwID0gZnVuY3Rpb24gKGxlbikge1xuICBjb25zdCBsZW5ndGggPSBsZW47XG4gIGxldCBoaXRzID0gMDtcblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaGl0cysrO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH0sXG4gICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgIHJldHVybiBoaXRzID49IGxlbmd0aDtcbiAgICB9LFxuICAgIGhpdCxcbiAgfTtcbn07XG5cbmNvbnN0IGdhbWVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYm9hcmQgPSB7XG4gICAgMToge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICAyOiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDM6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgNDoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA1OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDY6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgNzoge1xuICAgICAgMTogbnVsbCxcbiAgICAgIDI6IG51bGwsXG4gICAgICAzOiBudWxsLFxuICAgICAgNDogbnVsbCxcbiAgICAgIDU6IG51bGwsXG4gICAgICA2OiBudWxsLFxuICAgICAgNzogbnVsbCxcbiAgICAgIDg6IG51bGwsXG4gICAgICA5OiBudWxsLFxuICAgICAgMTA6IG51bGwsXG4gICAgfSxcbiAgICA4OiB7XG4gICAgICAxOiBudWxsLFxuICAgICAgMjogbnVsbCxcbiAgICAgIDM6IG51bGwsXG4gICAgICA0OiBudWxsLFxuICAgICAgNTogbnVsbCxcbiAgICAgIDY6IG51bGwsXG4gICAgICA3OiBudWxsLFxuICAgICAgODogbnVsbCxcbiAgICAgIDk6IG51bGwsXG4gICAgICAxMDogbnVsbCxcbiAgICB9LFxuICAgIDk6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gICAgMTA6IHtcbiAgICAgIDE6IG51bGwsXG4gICAgICAyOiBudWxsLFxuICAgICAgMzogbnVsbCxcbiAgICAgIDQ6IG51bGwsXG4gICAgICA1OiBudWxsLFxuICAgICAgNjogbnVsbCxcbiAgICAgIDc6IG51bGwsXG4gICAgICA4OiBudWxsLFxuICAgICAgOTogbnVsbCxcbiAgICAgIDEwOiBudWxsLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IGNhcnJpZXIgPSBzaGlwKDUpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcCg0KTtcbiAgY29uc3QgY3J1aXNlciA9IHNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXAoMyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoMik7XG5cbiAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuXG4gIGNvbnN0IGlzRGVmZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChlYWNoU2hpcCkgPT4ge1xuICAgICAgcmV0dXJuIGVhY2hTaGlwLmlzU3VuaztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB2YWxpZFRhcmdldHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHZhbGlkQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHhDb29yZCBpbiBib2FyZCkge1xuICAgICAgZm9yIChjb25zdCB5Q29vcmQgaW4gYm9hcmRbeENvb3JkXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIiB8fCBib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHZhbGlkVGFyZ2V0ID0gW3hDb29yZCwgeUNvb3JkXTtcbiAgICAgICAgICB2YWxpZEFycmF5LnB1c2godmFsaWRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxpZEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChzaGlwLCB4Q29vcmQsIHlDb29yZCwgaG9yaXpvbnRhbCA9IHRydWUpIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgaWYgKHhDb29yZCA8PSAwIHx8IHlDb29yZCA8PSAwIHx8IHhDb29yZCA+IDEwIHx8IHlDb29yZCA+IDEwKSB7XG4gICAgICByZXR1cm4gXCJpbnZhbGlkIENvb3JkaW5hdGVzXCI7XG4gICAgfVxuICAgIGlmICghaG9yaXpvbnRhbCkge1xuICAgICAgaWYgKHlDb29yZCArIHNoaXBMZW5ndGggLSAxID4gMTApIHtcbiAgICAgICAgcmV0dXJuIFwiaW52YWxpZCBjb29yZGluYXRlczogc2hpcCBkb2VzIG5vdCBmaXQgb24gYm9hcmRcIjtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghKGJvYXJkW3hDb29yZF1beUNvb3JkICsgaV0gPT0gbnVsbCkpIHtcbiAgICAgICAgICByZXR1cm4gXCJpbnZhbGlkIGNvb3JkaW5hdGVzOiBzaGlwIGNvbGxpZGVzIHdpdGggYW5vdGhlciBzaGlwXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkICsgaV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeENvb3JkICsgc2hpcExlbmd0aCAtIDEgPiAxMCkge1xuICAgICAgICByZXR1cm4gXCJpbnZhbGlkIGNvb3JkaW5hdGVzOiBzaGlwIGRvZXMgbm90IGZpdCBvbiBib2FyZFwiO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCEoYm9hcmRbeENvb3JkICsgaV1beUNvb3JkXSA9PSBudWxsKSkge1xuICAgICAgICAgIHJldHVybiBcImludmFsaWQgY29vcmRpbmF0ZXM6IHNoaXAgY29sbGlkZXMgd2l0aCBhbm90aGVyIHNoaXBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeENvb3JkICsgaV1beUNvb3JkXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiAoeENvb3JkLCB5Q29vcmQpIHtcbiAgICBpZiAoYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IG51bGwpIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9IFwibWlzc1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIiB8fFxuICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwibWlzc1wiXG4gICAgKSB7XG4gICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXS5oaXQoKTtcbiAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9IFwiaGl0XCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVSYW5kb21BdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcG9zc2libGVUYXJnZXRzID0gdmFsaWRUYXJnZXRzKCk7XG4gICAgY29uc3QgcmFuZG9tQ29vcmRzID1cbiAgICAgIHBvc3NpYmxlVGFyZ2V0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocG9zc2libGVUYXJnZXRzLmxlbmd0aCAtIDEpKV07XG4gICAgcmVjZWl2ZUF0dGFjayhyYW5kb21Db29yZHNbMF0sIHJhbmRvbUNvb3Jkc1sxXSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBzaGlwcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0RlZmVhdGVkLFxuICAgIHZhbGlkVGFyZ2V0cyxcbiAgICByZWNlaXZlUmFuZG9tQXR0YWNrLFxuICB9O1xufTtcblxuY29uc3QgbWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgUGxheWVyID0gZ2FtZUJvYXJkKCk7XG4gIGNvbnN0IENvbXB1dGVyID0gZ2FtZUJvYXJkKCk7XG5cbiAgbGV0IFBsYXllcm1vdmUgPSB0cnVlO1xuXG4gIFBsYXllci5wbGFjZVNoaXAoUGxheWVyLnNoaXBzWzBdLCAxLCAxKTtcbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbMV0sIDEsIDMpO1xuICBQbGF5ZXIucGxhY2VTaGlwKFBsYXllci5zaGlwc1syXSwgMSwgNSk7XG4gIFBsYXllci5wbGFjZVNoaXAoUGxheWVyLnNoaXBzWzNdLCAxLCA3KTtcbiAgUGxheWVyLnBsYWNlU2hpcChQbGF5ZXIuc2hpcHNbNF0sIDEsIDkpO1xuXG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1swXSwgMSwgMSk7XG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1sxXSwgMSwgMyk7XG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1syXSwgMSwgNSk7XG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1szXSwgMSwgNyk7XG4gIENvbXB1dGVyLnBsYWNlU2hpcChDb21wdXRlci5zaGlwc1s0XSwgMSwgOSk7XG5cbiAgY29uc3QgbW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgaWYgKFBsYXllcm1vdmUpIHtcbiAgICAgIGlmICghKENvbXB1dGVyLnJlY2VpdmVBdHRhY2soeCwgeSkgPT0gXCJpbnZhbGlkXCIpKSB7XG4gICAgICAgIFBsYXllcm1vdmUgPSAhUGxheWVybW92ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgUGxheWVybW92ZSA9ICFQbGF5ZXJtb3ZlO1xuICAgICAgUGxheWVyLnJlY2VpdmVSYW5kb21BdHRhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb3ZlLFxuICAgIGdldCBQbGF5ZXIoKSB7XG4gICAgICByZXR1cm4gUGxheWVyO1xuICAgIH0sXG4gICAgZ2V0IENvbXB1dGVyKCkge1xuICAgICAgcmV0dXJuIENvbXB1dGVyO1xuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBkb20gPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBnYW1lID0gbWFpbigpO1xuICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgbGV0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpO1xuXG4gIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKFwiYmFyXCIpO1xuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCB4KTtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgeSk7XG4gICAgICBib3guY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICAgIGJhci5hcHBlbmQoYm94KTtcbiAgICB9XG4gICAgcGxheWVyQm9hcmQucHJlcGVuZChiYXIpO1xuICB9XG5cbiAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoXCJiYXJcIik7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib3guc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHgpO1xuICAgICAgYm94LnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCB5KTtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGdhbWUubW92ZSh4LCB5KTtcbiAgICAgICAgcmVsb2FkQm9hcmRzKCk7XG4gICAgICB9KTtcbiAgICAgIGJhci5hcHBlbmQoYm94KTtcbiAgICB9XG4gICAgY29tcHV0ZXJCb2FyZC5wcmVwZW5kKGJhcik7XG4gIH1cblxuICBjb25zdCByZWxvYWRCb2FyZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29tcHV0ZXJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpO1xuICAgIGZvciAoY29uc3QgeENvb3JkIGluIGdhbWUuQ29tcHV0ZXIuYm9hcmQpIHtcbiAgICAgIGZvciAoY29uc3QgeUNvb3JkIGluIGdhbWUuQ29tcHV0ZXIuYm9hcmRbeENvb3JkXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZS5Db21wdXRlci5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJoaXRcIiB8fFxuICAgICAgICAgIGdhbWUuQ29tcHV0ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGRvbUJveCA9IGNvbXB1dGVyRG9tLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEteD1cIiR7eENvb3JkfVwiXVtkYXRhLXk9XCIke3lDb29yZH1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgbmV3Q2xhc3MgPSBnYW1lLkNvbXB1dGVyLmJvYXJkW3hDb29yZF1beUNvb3JkXTtcbiAgICAgICAgICBkb21Cb3guY2xhc3NMaXN0LmFkZChgJHtuZXdDbGFzc31gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwbGF5ZXJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgICBmb3IgKGNvbnN0IHhDb29yZCBpbiBnYW1lLlBsYXllci5ib2FyZCkge1xuICAgICAgZm9yIChjb25zdCB5Q29vcmQgaW4gZ2FtZS5QbGF5ZXIuYm9hcmRbeENvb3JkXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZS5QbGF5ZXIuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwiaGl0XCIgfHxcbiAgICAgICAgICBnYW1lLlBsYXllci5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgZG9tQm94ID0gcGxheWVyRG9tLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEteD1cIiR7eENvb3JkfVwiXVtkYXRhLXk9XCIke3lDb29yZH1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgbmV3Q2xhc3MgPSBnYW1lLlBsYXllci5ib2FyZFt4Q29vcmRdW3lDb29yZF07XG4gICAgICAgICAgZG9tQm94LmNsYXNzTGlzdC5hZGQoYCR7bmV3Q2xhc3N9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5sZXQgbmV3Qm9hcmQgPSBkb20oKTtcblxuZXhwb3J0IHsgc2hpcCwgZ2FtZUJvYXJkLCBtYWluIH07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YmJmY2E1ZjdiM2QxMWFkNjQ1OFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==