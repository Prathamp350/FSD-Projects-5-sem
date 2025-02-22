import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import destinationsData from '../data/destinationsdata'; // Import your data

const Destination = () => {
  const { country, state } = useParams();
  const [cityData, setCityData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (country && state) {
      const fetchedData = destinationsData[country].states[state].cities;
      setCityData(fetchedData);
    }
  }, [country, state]);

  if (!cityData) {
    return <div>Loading
      
      
      ...</div>;
  }

  return (
    <div>
      <h2>{state}</h2>
      {Object.keys(cityData).map((city) => (
        <div key={city}>
          <h3>{city}</h3>
          <p>{cityData[city].description}</p>
          <button onClick={() => navigate(`/destination/${country}/${state}/${city}`)}>
            View City Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Destination;
