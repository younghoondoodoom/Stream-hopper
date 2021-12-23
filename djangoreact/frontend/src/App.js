import './App.scss';
import RestAPI from './RestAPI';
import Routing from './Routing.js';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <div className="App">
      {/* <RestAPI></RestAPI> */}
      <RecoilRoot>
        <Routing />
      </RecoilRoot>
    </div>
  );
}

export default App;
