import React from 'react'

function CountryList({ countries, onSelectCountry }) {
  return (
    <div>
    <h2>Countries</h2>
    <ul>
      {countries.map(country => (
        <li key={country.name} onClick={() => onSelectCountry(country)}>
          {country.name}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default CountryList