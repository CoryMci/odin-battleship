import {ship, gameBoard} from './src/index'


//SHIP TESTS
test('ship returns correct length', ()=> {
    const battleship = ship(5)
    expect(battleship.length).toBe(5)
})

test('New ship returns 0 hits', ()=> {
    const battleship = ship(5)
    expect(battleship.hits).toBe(0)
})

test('When ship is hit twice, return 2 hits', ()=> {
    const battleship = ship(5)
    battleship.hit()
    battleship.hit()
    expect(battleship.hits).toBe(2)
})

test('When ship(3) is hit 2x, isSunk returns false', ()=> {
    const battleship = ship(3)
    battleship.hit()
    battleship.hit()
    expect(battleship.isSunk).toBe(false)
})

test('When ship(3) is hit 3x, isSunk returns true', ()=> {
    const battleship = ship(3)
    battleship.hit()
    battleship.hit()
    battleship.hit()
    expect(battleship.isSunk).toBe(true)
})

//GAMEBOARD TESTS
test('gameboard initializes with empty board', ()=> {
    const testBoard = gameBoard()
    expect(testBoard.board[1][1]).toBe(null)
})

test('gameboard ships initialized correctly', ()=> {
    const testBoard = gameBoard()
    expect(testBoard.ships.length).toBe(5)
})

test('board coordinates greater than 10 return undefined', ()=> {
    const testBoard = gameBoard()
    expect(testBoard.board[6][11]).toBe(undefined)
})

test('gameboard placeShip correctly places ship in direction X', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    testBoard.placeShip(dingy, 3, 6, true)
    expect(testBoard.board[3][6]).toBe(dingy)
})

test('gameboard placeShip correctly places ship in direction X', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    testBoard.placeShip(dingy, 3, 6, true)
    expect(testBoard.board[4][6]).toBe(dingy)
})

test('gameboard placeShip correctly places ship in direction X', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    testBoard.placeShip(dingy, 3, 6, true)
    expect(testBoard.board[5][6]).toBe(dingy)
})

test('gameboard placeShip correctly places ship in direction X', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    testBoard.placeShip(dingy, 3, 6, true)
    expect(testBoard.board[6][6]).toBe(null)
})

test('gameboard placeShip correctly places ship in direction Y', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    testBoard.placeShip(dingy, 3, 6, false)
    expect(testBoard.board[4][6]).toBe(null)
})

test('gameboard placeShip correctly places ship in direction Y', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    testBoard.placeShip(dingy, 3, 6, false)
    expect(testBoard.board[3][7]).toBe(dingy)
})

test('gameboard placeShip correctly returns error string when exceeding board edges', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    const returnvalue = testBoard.placeShip(dingy, 3, 6, false)
    expect(returnvalue).toBe(undefined)
})

test('gameboard placeShip correctly returns error string when exceeding board edges', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    const returnvalue = testBoard.placeShip(dingy, 3, 9, false)
    expect(returnvalue).toBe('invalid coordinates: ship does not fit on board')
})

test('gameboard placeShip correctly returns error string when colliding with another ship vertically', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    const dingy2 = ship(3)
    testBoard.placeShip(dingy2, 3, 5, false)
    const returnvalue = testBoard.placeShip(dingy, 3, 5, false)
    expect(returnvalue).toBe('invalid coordinates: ship collides with another ship')
})

test('gameboard placeShip correctly returns error string when colliding with another ship horizontally', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    const dingy2 = ship(3)
    testBoard.placeShip(dingy2, 2, 1, false)
    const returnvalue = testBoard.placeShip(dingy, 2, 2, true)
    expect(returnvalue).toBe('invalid coordinates: ship collides with another ship')
})

test('recieveAttack correctly updates board', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    const dingy2 = ship(3)
    testBoard.placeShip(dingy2, 2, 1, false)
    testBoard.placeShip(dingy, 3, 2, true)
    testBoard.receiveAttack(3,2)

    expect(testBoard.board[3][2]).toBe('hit')
})

test('recieveAttack correctly updates board', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    const dingy2 = ship(3)
    testBoard.placeShip(dingy2, 2, 1, false)
    testBoard.placeShip(dingy, 3, 2, true)
    testBoard.receiveAttack(3,2)

    expect(testBoard.board[4][2]).toBe(dingy)
})

test('recieveAttack correctly updates ships', ()=> {
    const testBoard = gameBoard()
    const dingy = ship(3)
    const dingy2 = ship(3)
    testBoard.placeShip(dingy2, 2, 1, false)
    testBoard.placeShip(dingy, 3, 2, true)
    testBoard.receiveAttack(3,2)
    testBoard.receiveAttack(4,2)

    expect(dingy.hits).toBe(2)
})