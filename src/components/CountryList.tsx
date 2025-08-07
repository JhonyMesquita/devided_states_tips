import { useState, useEffect, useMemo, useCallback, memo } from 'react'

interface Country {
  name: {
    common: string
  }
}

export const CountryList = memo(function CountryList() {
  const [countries, setCountries] = useState<Country[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }, [])

  const filteredCountries = useMemo(() => 
    countries.filter((country) => 
      country.name.common.toLowerCase().includes(search.toLowerCase())
    ), [countries, search]
  )

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  console.log('Renderizou - Lista de Países')

  return (
    <div className="country-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por um país..."
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <ul className="countries-list">
        {filteredCountries.map((country) => (
          <li key={country.name.common} className="country-item">
            <span className="country-name">{country.name.common}</span>
          </li>
        ))}
      </ul>
    </div>
  )
})
