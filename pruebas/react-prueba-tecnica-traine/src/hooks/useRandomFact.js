import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/getRandomFact'

export const useRandomFact = () => {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then(text => setFact(text))
  }
  useEffect(refreshFact, [])

  const firstWord = fact?.split(' ', 1).join(' ')
  return { fact, firstWord, refreshFact }
}
