import { useEffect, useState } from 'react'
import './app.css'

const API_FACT = 'https://catfact.ninja/fact'
const API_IMAGE_CAT = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState()
  const [imageCat, setImageCat] = useState()
  useEffect(() => {
    async function getRandomFact () {
      const res = await fetch(API_FACT)
      const json = await res.json()
      setFact(json.fact)
      const firstWord = json.fact.split(' ', 3).join(' ')
      setImageCat(firstWord)
    }

    getRandomFact()
  }, [])
  return (
    <main className='home'>
      {fact && <h1>{fact}</h1>}
      {imageCat &&
        <div className='div-img'>
          <img src={`${API_IMAGE_CAT}${imageCat}`} alt={fact} />
        </div>}
    </main>
  )
}
