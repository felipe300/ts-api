export interface ClubInterface {
  name: string
  code: string | null
  country: string
}

export interface ClubsInterface {
  name: string
  clubs: ClubInterface[]
}

export interface MatchInterface {
  round: string
  date: string
  team1: string
  team2: string
  score?: {
    ft: [number, number]
  }
}

export interface MatchesInterface {
  name: string
  clubs: MatchInterface[]
}
