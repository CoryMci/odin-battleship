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

  const isDefeated = function(){
    return (ships.every((eachShip)=>{
      return eachShip.isSunk
    }))
  }

  const validTargets = function(){
    let validArray = []
    for (const xCoord in board) {
      for (const yCoord in board[xCoord]){
        if (!(board[xCoord][yCoord] == 'hit' || board[xCoord][yCoord] == 'miss')){
          const validTarget = [xCoord, yCoord]
          validArray.push(validTarget)
        }
      }
    }
    return validArray
  }

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
    } else if (board[xCoord][yCoord] == 'hit' || board[xCoord][yCoord] == 'miss'){
      return 'invalid'
    } else{ 
      board[xCoord][yCoord].hit()
      board[xCoord][yCoord] = 'hit'
    }
  }

  return {
    get board(){
      return board
    },
    ships,
    placeShip,
    receiveAttack,
    isDefeated,
    validTargets
  }
}

const main = function(){
  const Player = gameBoard()
  const Computer = gameBoard()

  Player.placeShip(Player.ships[0], 1, 1)
  Player.placeShip(Player.ships[1], 1, 3)
  Player.placeShip(Player.ships[2], 1, 5)
  Player.placeShip(Player.ships[3], 1, 7)
  Player.placeShip(Player.ships[4], 1, 9)

  Computer.placeShip(Computer.ships[0], 1, 1)
  Computer.placeShip(Computer.ships[1], 1, 3)
  Computer.placeShip(Computer.ships[2], 1, 5)
  Computer.placeShip(Computer.ships[3], 1, 7)
  Computer.placeShip(Computer.ships[4], 1, 9)

  const move = function(x,y){
      if (!(Computer.receiveAttack(x,y) == 'invalid')){
        Playermove = !Playermove
      }
    
    reloadBoards()
  }

  

  return {
    move,
    get Player() {
      return Player
    },
    get Computer() {
      return Computer
    }
  }
}

let game = main()

// const dom = function(){
//   let playerBoard = document.querySelector('.player');
//   let computerBoard = document.querySelector('.computer');

//   for (let y = 1; y <= 10; y++) {
//     const bar = document.createElement('div')
//     bar.classList.add('bar')
//     for (let x = 1; x <= 10; x++){
//       let box = document.createElement('div');
//       box.setAttribute('data-x', x)
//       box.setAttribute('data-y', y)
//       box.classList.add('box')
//       bar.append(box)
//     }
//     playerBoard.prepend(bar)
//   }

//   for (let y = 1; y <= 10; y++) {
//     const bar = document.createElement('div')
//     bar.classList.add('bar')
//     for (let x = 1; x <= 10; x++){
//       let box = document.createElement('div');
//       box.setAttribute('data-x', x)
//       box.setAttribute('data-y', y)
//       box.classList.add('box')
//       box.addEventListener('click',()=>{
//         game.move(x, y)
//       })
//       bar.append(box)
//     }
//     computerBoard.prepend(bar)
//   }

//   const reloadBoards = function(){
//     const computerDom = document.querySelector('.computer')
//     for (const xCoord in game.Computer.board) {
//       for (const yCoord in game.Computer.board[xCoord]){
//         if (game.Computer.board[xCoord][yCoord] == 'hit' || game.Computer.board[xCoord][yCoord] == 'miss'){
//           const domBox = computerDom.querySelector(`[data-x="${xCoord}"][data-y="${yCoord}"]`)
//           let newClass = game.Computer.board[xCoord][yCoord]
//           domBox.classList.add(`${newClass}`)
//         }
//       }
//     }
//     const playerDom = document.querySelector('.player')
//     for (const xCoord in game.Player.board) {
//       for (const yCoord in game.Player.board[xCoord]){
//         if (game.Player.board[xCoord][yCoord] == 'hit' || game.Player.board[xCoord][yCoord] == 'miss'){
//           const domBox = playerDom.querySelector(`[data-x="${xCoord}"][data-y="${yCoord}"]`)
//           let newClass = game.Player.board[xCoord][yCoord]
//           domBox.classList.add(`${newClass}`)
//         }
//       }
//     }
//   }
// }

// let newBoard = dom()



export {ship, gameBoard, main}