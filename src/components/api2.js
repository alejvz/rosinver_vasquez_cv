//Asteroids - NeoWs
import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'dGfbHejzwtIKqY5AfFf07JxAqCUtr1FvmKhj0E7m';

const API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-07-07&end_date=2020-07-08&api_key=${API_KEY}`;

export const MyComponent = () => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {/* Aquí puedes renderizar los datos obtenidos de la API */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
