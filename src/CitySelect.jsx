import React, { useState,useEffect  } from 'react';
import cities from './city.json';

const CitySelect = ({ onCityChange }) => {
  
  const [selectedCity, setSelectedCity] = useState('');
  useEffect(() => {
    onCityChange(selectedCity); 
  }, [selectedCity]);

 
  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };
  console.log(selectedCity)
  return (
    <div>
      <label htmlFor="city">Şehir Seçin:</label>
      <select id="city" name="city" value={selectedCity} onChange={handleChange}>
        <option value="">Seçiniz</option>
        {cities.map((city) => (
          <option key={city} value={city.toLowerCase()}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelect;
