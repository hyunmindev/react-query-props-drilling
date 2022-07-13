import { Suspense, useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import SuspenseContainer from './components/SuspenseContainer';
import IndividualContainer from './components/IndividualContainer';

const queryClient = new QueryClient();

export default function App() {
  const [isIndividual, setIsIndividual] = useState(localStorage.getItem('mode') === 'individual');

  useEffect(() => {
    localStorage.setItem('mode', isIndividual ? 'individual' : 'suspense');
  }, [isIndividual]);

  return (
    <>
      <p>현재모드: {isIndividual ? '적재적소' : 'Suspense'}</p>
      <button
        type="button"
        onClick={() => {
          setIsIndividual(!isIndividual);
        }}
      >
        switch
      </button>
      <QueryClientProvider client={queryClient}>
        {isIndividual ? (
          <IndividualContainer />
        ) : (
          <Suspense fallback={<h1>loading</h1>}>
            <SuspenseContainer />
          </Suspense>
        )}
      </QueryClientProvider>
    </>
  );
}
