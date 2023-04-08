const API_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(API_FACT)
  const json = await res.json()

  return json.fact
}
