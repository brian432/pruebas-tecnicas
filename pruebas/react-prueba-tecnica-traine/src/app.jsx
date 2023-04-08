import { useRandomFact } from './hooks/useRandomFact'
import './App.css'
const API_IMAGE_CAT = 'https://cataas.com/cat/says/'
export function App () {
  const { fact, firstWord, refreshFact } = useRandomFact()

  const handleClick = () => {
    refreshFact()
  }
  return (
    <main className='home'>
      <p>{fact}</p>
      <div className='div-img'>
        <img src={`${API_IMAGE_CAT}${firstWord}`} alt={fact} />
      </div>
      <button onClick={handleClick}>Nueva imagen</button>
    </main>
  )
}
