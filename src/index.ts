import { CsvFileReader } from './CsvFileReader'

// Load
const reader = new CsvFileReader('football.csv')
reader.read()

// Analyze
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0

for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

// Report
console.log(`Man United won ${manUnitedWins} games`)
