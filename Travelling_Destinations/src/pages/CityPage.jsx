import React from 'react';
import { useParams } from 'react-router-dom';
import destinationsData from '../data/destinationsdata'; // Import your data

const CityPage = () => {
  const { country, state, city } = useParams();
  const cityData = destinationsData[country].states[state].cities[city];

  return (
    <div>
      <h1>{city}</h1>
      <p>{cityData.description}</p>
      {/* ... display attractions, images, etc. */}
      <h2>Attractions:</h2>
      <ul>
        {cityData.attractions.map((attraction) => (
          <li key={attraction}>{attraction}</li>
        ))}
      </ul>
      {/* ... display images */}
    </div>
  );
};

export default CityPage;
