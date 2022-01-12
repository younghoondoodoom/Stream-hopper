import React, { Suspense } from "react";
import "./App.scss";
import { RecoilRoot } from "recoil";
import Spinner from "./pages/page-load/Spinner";
import ReactModal from "react-modal";

function App() {
  const Routing = React.lazy(() => import("./components/Routing"));

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
ReactModal.setAppElement("#root");
