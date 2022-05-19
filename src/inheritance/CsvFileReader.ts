import fs from 'fs'

export abstract class CsvFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      // Parse
      .split('\n')
      .map((match: string): string[] => match.split(','))
      .map(this.mapRow)
  }
}
