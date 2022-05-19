import { MatchData } from '../MatchData'
import { Analyser } from '../Summary'
import { MatchResult } from '../MatchResult'

export class WinsAnalysis implements Analyser {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0

    for (const match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++
      }
      if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        wins++
      }
    }

    return `Team ${this.teamName} won ${wins} games`
  }
}
