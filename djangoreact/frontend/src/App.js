import './App.scss';
import Routing from './components/Routing.js';
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
