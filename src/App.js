import React from "react";
import useMain from "./MainContext";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/Lib.css";
import "./styles/Global.css";
import "./styles/Global_pages.css";
import { Primary } from "./templates";

function App() {
  const {  } = useMain();

  return (
    <div className="App">
          {/* primary template like email lists - or single email */}
          <Routes>
            <Route path="/" element={
              <Primary>
                Some content here
              </Primary>
            } />
          </Routes>

          {/* <Routes>
            <Route path="/something" element={<Appp2 />} />
          </Routes> */}
    </div>
  );
}

export default App;


