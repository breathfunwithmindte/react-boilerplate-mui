import React from 'react';
import Navigation from "../components/Navigation";

const MainTemplate = ({children}) => {
  return (
      <div className='App-page-wrapper'>
        <Navigation />
        {children}
      </div>
  );
}

export default MainTemplate;
