import * as fs from 'node:fs';

// const input = fs.readFileSync('./01/Tinput02.txt', 'utf-8')
const input = fs.readFileSync('./01/input.txt', 'utf-8')

const clearerdInput: string[] = input.split('\n')

const spelledNumbers: Map<string, string> = new Map([
  ['one', '1'],
  ['two', '2'],
  ['three', '3'],
  ['four', '4'],
  ['five', '5'],
  ['six', '6'],
  ['seven', '7'],
  ['eight', '8'],
  ['nine', '9'],
])

function getCalibrationValue(value: string): number {
  let calibrationValue = ''
  for (let position = 0; position < value.length; position++) {
    if (Number(value[position])) {
      calibrationValue = value[position]
      break
    }
    const char3 = value.slice(position, position + 3)
    if (spelledNumbers.has(char3)) {
      calibrationValue = (spelledNumbers.get(char3) as string)
      break
    }
    const char4 = value.slice(position, position + 4)
    if (spelledNumbers.has(char4)) {
      calibrationValue = (spelledNumbers.get(char4) as string)
      break
    }
    const char5 = value.slice(position, position + 5)
    if (spelledNumbers.has(char5)) {
      calibrationValue = (spelledNumbers.get(char5) as string)
      break
    }
  }
  for (let position = value.length - 1; position >= 0; position--) {
    if (Number(value[position])) {
      calibrationValue += value[position]
      break
    }
    const char3 = value.slice(position - 2, position + 1)
    if (spelledNumbers.has(char3)) {
      calibrationValue += (spelledNumbers.get(char3) as string)
      break
    }
    const char4 = value.slice(position - 3, position + 1)
    if (spelledNumbers.has(char4)) {
      calibrationValue += (spelledNumbers.get(char4) as string)
      break
    }
    const char5 = value.slice(position - 4, position + 1)
    if (spelledNumbers.has(char5)) {
      calibrationValue += (spelledNumbers.get(char5) as string)
      break
    }
  }
  return Number(calibrationValue)
}

console.log(clearerdInput.map(value => getCalibrationValue(value)).reduce((acc, curr) => acc + curr))