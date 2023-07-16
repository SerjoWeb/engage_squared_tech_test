import { Fragment, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import useStore from './store';
import LoadingState from './components/LoadingState';
import Header from './components/Header';
import Map from './components/Map';

const App = () => {
  const { data, setsAllBikePointLocations } = useStore();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      setsAllBikePointLocations();
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <Fragment>
      {isLoading ? (
        <LoadingState />
      ) : (
        <Fragment>
          <Toaster/>
          <Header />

          <main className='h-screen w-full'>
            <Map data={data} />
          </main>
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
