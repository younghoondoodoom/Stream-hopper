import './App.scss';
import RestAPI from './RestAPI';
import Routing from './Routing.js';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      {/* <RestAPI></RestAPI> */}
      <Routing />
    </div>
  );
}

export default App;
