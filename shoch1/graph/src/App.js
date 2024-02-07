import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { getCurrencies,getSomeProducts,getSingleProductByID,getCategory } from './requests';

function App() {
  // const {data, loading, error}=useQuery(getCurrencies());
  // const {data, loading, error}=useQuery(getSomeProducts());
  // const {data, loading, error}=useQuery(getSingleProductByID("ps-5"));
  const {data, loading, error}=useQuery(getCategory());
  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
