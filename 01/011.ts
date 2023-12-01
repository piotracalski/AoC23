import * as fs from 'node:fs';

const input = fs.readFileSync('./01/input.txt', 'utf-8')

const clearerdInput: string[] = input.split('\n')
console.log(clearerdInput)

function getCalibrationValue(value: string): number {
  const clearedValue = value.replace(/[a-zA-Z]/g, '')
  console.log({clearedValue})
  let calibrationValue: string = ''
  if (clearedValue.length === 1) {
    calibrationValue = clearedValue.charAt(0) + clearedValue.charAt(0)
  } else {
    calibrationValue = clearedValue.charAt(0) + clearedValue.charAt(clearedValue.length - 1)
  }
  return Number(calibrationValue)
}

console.log(clearerdInput.map(value => getCalibrationValue(value)).reduce((acc, curr) => acc + curr))