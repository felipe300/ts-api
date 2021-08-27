import {
  ClubInterface,
  ClubsInterface,
  MatchInterface,
  MatchesInterface,
} from './types/types'

const clubs: ClubsInterface = require('../../data/clubs.json')
const finals: MatchesInterface = require('../../data/finals.json')

export const getClub = (code: string): ClubInterface => {
  const club = clubs.clubs.find((club) => club.code === code)
  if (!club) {
    throw new Error('Club not found')
  }
  return club
}

export const getFinals = (club1: string, club2: string): MatchInterface => {
  const match = finals.clubs.find((match) => {
    return club1 === match.team1 && club2 === match.team2
  })
  if (!match) {
    throw new Error('Match not found')
  }
  return match
}
