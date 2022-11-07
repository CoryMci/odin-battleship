import './style.css';
import './fontstyle.css';

const ship = function(len){
  const length = len
  let hits = 0

  const hit = function(){
    hits++
  }

  return {
    get length(){
      return length
    },
    get hits(){
      return hits
    },
    get isSunk(){
      return (hits>=length)
    },
    hit
  }
}

const gameBoard = function(){
  const board = {
                 1:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 2:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 3:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 4:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 5:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 6:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 7:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 8:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 9:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null},
                 10:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null}
                }
  const carrier = ship(5)
  const battleship = ship(4)
  const cruiser = ship(3)
  const submarine = ship(3)
  const destroyer = ship(2)

  const ships = [carrier, battleship, cruiser, submarine, destroyer]

  const placeShip = function(ship, xCoord, yCoord, horizontal=true){
    const shipLength = ship.length
    if (xCoord <= 0 || yCoord <= 0 || xCoord > 10 || yCoord > 10) {
      return 'invalid Coordinates'
    }
    if (!horizontal){
      if (yCoord + shipLength -1 > 10) {
        return 'invalid coordinates: ship does not fit on board'
      }
      for (let i = 0; i<shipLength; i++) {
        if (!(board[xCoord][yCoord+i] == null)) {
          return 'invalid coordinates: ship collides with another ship'
        }
      }
      for (let i = 0; i<shipLength; i++) {
        board[xCoord][yCoord+i] = ship
        }
    } else {
      if (xCoord + shipLength -1 > 10) {
        return 'invalid coordinates: ship does not fit on board'
      }
      for (let i = 0; i<shipLength; i++) {
        if (!(board[xCoord+i][yCoord] == null)) {
          return 'invalid coordinates: ship collides with another ship'
        }
      }
      for (let i = 0; i<shipLength; i++) {
        board[xCoord+i][yCoord] = ship
        }
    }
  }
  
  const receiveAttack = function(xCoord, yCoord) {
    if (board[xCoord][yCoord] == null) {
      board[xCoord][yCoord] = 'miss'
    } else {
      board[xCoord][yCoord].hit()
      board[xCoord][yCoord] = 'hit'
    }
  }

  return {
    board,
    ships,
    placeShip,
    receiveAttack
  }
}


export {ship, gameBoard}