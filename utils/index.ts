import * as fs from 'node:fs';

export function readInput({path}: {path: string}) {
  return fs.readFileSync(path, 'utf-8')
}