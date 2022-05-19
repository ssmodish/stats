import fs from 'fs'

// Load
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  // Parse
  .split('\n')
  .map((match: string): string[] => match.split(','))

// Analyze
let manUnitedWins = 0
for (const match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++
  }
  if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++
  }
}

// Report
console.log(`Man United won ${manUnitedWins} games`)
