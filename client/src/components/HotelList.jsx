import React, { useState } from 'react';
import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const HotelList = () => {
  const [city, setCity] = useState('');

  const fetchHotels = async (city) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=hotel+${city}&limit=100`
      );

      const hotels = response.data.map((hotel) => ({
        id: hotel.place_id,
        name: hotel.display_name,
        lat: hotel.lat,
        lon: hotel.lon,
      }));

      return hotels;
    } catch (error) {
      throw new Error('Error fetching hotel data');
    }
  };

 

  const { data: hotels, status: hotelsStatus } = useQuery(
    ['hotels', city],
    () => fetchHotels(city)
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="Hotels">
        <h1>Search for Hotels</h1>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search"
        />
        <div>
        <ul>
          {hotelsStatus === 'loading' && <p>Loading...</p>}
          {hotelsStatus === 'error' && <p>Error fetching data</p>}
          {hotelsStatus === 'success' &&
            hotels.map((hotel) => (
              <li key={hotel.id} className="hotelsdesign">
                <strong>{hotel.name}</strong>
                
              </li>
            ))}
        </ul>
      </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default HotelList;