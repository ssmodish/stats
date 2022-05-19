import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

// create an object that qualifies as a 'DataReader'
const csvFileReader = new CsvFileReader('football.csv')

// create a MatchReader which requires that DataReader
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins = 0

for (const match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
