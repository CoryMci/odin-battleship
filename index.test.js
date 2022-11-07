import {ship} from './src/index'

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