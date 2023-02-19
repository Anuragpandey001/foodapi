
import { useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import Reciepe from './Components/Reciepe';
import Tabs from './Components/Tabs';

function App() {

  const [loader, setLoader] = useState(true)
  return (
    <>
      <Header />

      <Tabs setLoader={setLoader} />
      <Reciepe setLoader={setLoader} />
      {loader && <div className='loader'>
        <div className='spinner'>

        </div>
      </div>}
    </>
  );
}

export default App;
