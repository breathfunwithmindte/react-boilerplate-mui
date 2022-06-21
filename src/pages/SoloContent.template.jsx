import React from 'react';
import Navigation from "../components/Navigation";

const SoloContentTemplate = ({children}) => {
  return (
      <div style={{width: "100%", display: "flex", justifyContent: "center", paddingTop: 256}}>
        {children}
      </div>
  );
}

export default SoloContentTemplate;