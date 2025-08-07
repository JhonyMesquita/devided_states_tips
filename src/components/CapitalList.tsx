import { useState, useEffect, useMemo, useCallback, memo } from 'react'

interface Country {
  name: {
    common: string
    official: string
  }
  capital: string[]
}

export const CapitalList = memo(function CapitalList() {
  const [countries, setCountries] = useState<Country[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }, [])

  // Extrair todas as capitais únicas dos países
  const allCapitals = useMemo(() => 
    countries
      .flatMap(country => country.capital || [])
      .filter((capital, index, arr) => arr.indexOf(capital) === index), // Remove duplicatas
    [countries]
  )

  // Filtrar apenas por capitais
  const filteredCapitals = useMemo(() => 
    allCapitals.filter((capital) => 
      capital.toLowerCase().includes(search.toLowerCase())
    ), [allCapitals, search]
  )

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  console.log('Renderizou - Lista de Capitais')

  return (
    <div className="country-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por capital..."
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <ul className="countries-list">
        {filteredCapitals.map((capital) => (
          <li key={capital} className="country-item">
            <div className="country-info">
              <span className="capital-name">{capital}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
})
