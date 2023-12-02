import { readInput } from '../utils';

const input = readInput({path: './01/input.txt'})
// console.log(input)

const clearedInput: string[] = input.split('\n')
// console.log(clearedInput)

function getCalibrationValue(value: string): number {
  const clearedValue = value.replace(/[a-zA-Z]/g, '')
  let calibrationValue: string = ''
  if (clearedValue.length === 1) {
    calibrationValue = clearedValue.charAt(0) + clearedValue.charAt(0)
  } else {
    calibrationValue = clearedValue.charAt(0) + clearedValue.charAt(clearedValue.length - 1)
  }
  return Number(calibrationValue)
}

console.log(clearedInput.map(value => getCalibrationValue(value)).reduce((acc, curr) => acc + curr))