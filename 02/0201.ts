import { readInput } from '../utils';

// const input = readInput({path: './02/Tinput0201.txt'})
const input = readInput({path: './02/input.txt'})

const sanitisedInput = input.split('\n').map(game => game.replace(/Game\s[0-9]:\s/, '').split('; '))
const MAX_CUBES = new Map([
  ['red', 12],
  ['green', 13],
  ['blue', 14]
])

const skippedCharacters = /\s|;|,|\n/
let sum = 0
let phrase = ''
let currentGame = ''
let isCurrentGameValid = true
let currentCubesNumber = ''

for (let position = 0; position <= input.length; position++) {
  const character = input.charAt(position)
  if (isCurrentGameValid) {
    if (character === 'G') {
      if (Number(currentCubesNumber) <= (MAX_CUBES.get(phrase) as number)) {
        sum += Number(currentGame)
      }
      currentGame = ''
      phrase = ''
      currentCubesNumber = ''
    }
    if (skippedCharacters.test(character)) continue
    if (phrase === 'Game') {
      if (character === ':') {
        phrase = ''
        continue
      }
      currentGame += character
    } else {
      if (character === '') {
        if (Number(currentCubesNumber) <= (MAX_CUBES.get(phrase) as number)) {
          sum += Number(currentGame)
        }
      }
      if (MAX_CUBES.has(phrase)) {
        if (Number(currentCubesNumber) > (MAX_CUBES.get(phrase) as number)) {
          isCurrentGameValid = false
          phrase = ''
          currentGame = ''
          currentCubesNumber = ''
        } else {
          phrase = ''
          currentCubesNumber = ''
        }
      }
      if (Number(character) || character === '0') {
        currentCubesNumber += character
        continue
      }
      phrase += character
    }
  } else if (character === 'G') {
    phrase = 'G'
    currentGame = ''
    currentCubesNumber = ''
    isCurrentGameValid = true
  }
}

console.log({sum})
