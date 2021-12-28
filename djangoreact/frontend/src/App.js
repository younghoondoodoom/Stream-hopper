import React, { Suspense } from 'react';
import './App.scss';
// import Routing from './components/Routing';
import { RecoilRoot } from 'recoil';
import Spinner from './components/Spinner';

function App() {
  // 나중에 footer 만들어 넣기
  const Routing = React.lazy(() => import('./components/Routing'));

  return (
    <div className="App">
      <RecoilRoot>
        <Suspense fallback={<Spinner />}>
          <Routing />
        </Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
