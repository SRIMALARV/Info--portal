import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import HotelList from './HotelList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <HotelList />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;