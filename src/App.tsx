import { useEffect } from 'react';
import './App.css';
import { fetchGamesList } from './StoreProvider/fetchGamesList';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesList } from './StoreProvider/gamesSelectors';

function App() {
  const dispatch: any = useDispatch()

  const games = useSelector(getGamesList)

  console.log(games)

  useEffect(() => {
    dispatch(fetchGamesList({platform: "pc"}))
  }, [])

  // const games = getGamesList()
  
  return (
    <div className="App">
      {/* <button onClick={fetchGamesList}>Load</button> */}
    </div>
  );
}

export default App;
