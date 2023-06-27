'use client'
import React from 'react';
import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

interface Vagon {
  VagonNumber: string;
  VagonType: string;
  CargoName: string;
  OwnerName: string;
}

const VagonsPage: React.FC = () => {
  const fetchVagons = async () => {
    const response = await axios.get<{ Vagons: Vagon[] }>('https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/VagonInfo');
    return response.data.Vagons;
  };

  const { data: vagons, isLoading, isError } = useQuery('vagons', fetchVagons);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !vagons) {
    return <div>Error fetching vagons data</div>;
  }
/*//варіант 1 виведення даних
  return (
    <table>
        <tr>
          <th>Vagon Number</th>
          <th>Vagon Type</th>
          <th>Cargo Name</th>
          <th>Owner Name</th>
        </tr>
        {vagons.map((vagon: Vagon) => (
          <tr key={vagon.VagonNumber}>
            <td>{vagon.VagonNumber}</td>
            <td>{vagon.VagonType}</td>
            <td>{vagon.CargoName}</td>
            <td>{vagon.OwnerName}</td>
          </tr>
        ))}
    </table>
  );
};*/

return (
  //варіант 2 виведення даних
  <div>
  {vagons.map(vagon => (
    <div key={vagon.VagonNumber}>
      <p>Vagon Number: {vagon.VagonNumber}</p>
      <p>Vagon Type: {vagon.VagonType}</p>
      <p>Cargo Name: {vagon.CargoName}</p>
      <p>Owner Name: {vagon.OwnerName}</p>
      <hr />
    </div>
  ))}
  </div>
  ); };

const VagonsPageWrapper: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={queryClient}>
        <VagonsPage />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default VagonsPageWrapper;
