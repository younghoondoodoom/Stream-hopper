import './App.scss';
import Routing from './components/Routing.js';
import { RecoilRoot } from 'recoil';

function App() {
  // 나중에 footer 만들어 넣기
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
