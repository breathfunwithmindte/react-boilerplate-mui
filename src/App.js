import Header from "./components/Header";
import useMain from "./MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/primary/App.css";
import "./styles/primary/PageHeader.css";
import "./styles/primary/Reuseable.css";
import MainTemplate from "./pages/Main.template.jsx";
import SoloContentTemplate from "./pages/SoloContent.template";

function App() {
  const { user } = useMain();

  const Appp = () => <MainTemplate><div className="App-page">
    <div style={{minWidth: 2000, minHeight: 3000}}>
      asd </div>
      </div></MainTemplate>
  const Appp1 = () => <MainTemplate><div>Gello wolrd app 111</div></MainTemplate>
  const Appp2 = () => <SoloContentTemplate><div>Gello wolrd app 111 2222</div></SoloContentTemplate>

  return (
    <div className="App">
          {/* primary template like email lists - or single email */}
          <Routes>
            <Route path="/" element={<Appp />} />
            <Route path="/email/:something" element={<Appp />} />
            <Route path="/" element={<Appp />} />
            <Route path="/1" element={<Appp1 />} />
            <Route path="/*" element={<SoloContentTemplate><div><h1>Page not found || 404</h1></div></SoloContentTemplate>} />
          </Routes>
          {/* solo contents - like compose new email */}
          <Routes>
            <Route path="/something" element={<Appp2 />} />
          </Routes>
    </div>
  );
}

export default App;


