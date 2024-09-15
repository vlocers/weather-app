import { useState } from 'react'
import './App.css'
import CitySelect from './CitySelect'
import Weather from './Weather'

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <h2>Hava Durumu</h2>
      <CitySelect onCityChange={handleCityChange} />
      <Weather city={selectedCity} />
    </div>
  )
}

export default App
