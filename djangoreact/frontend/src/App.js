import './App.scss';
import Routing from './components/Routing';
import { RecoilRoot } from 'recoil';

function App() {
  // 나중에 footer 만들어 넣기
  return (
    <div className="App">
      <RecoilRoot>
        <Routing />
      </RecoilRoot>
    </div>
  );
}

export default App;
