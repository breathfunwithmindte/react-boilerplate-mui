import React from 'react';
import Header from '../components/Header';
import Navigation from "../components/Navigation";

const MainTemplate = ({children}) => {
  return (
      <div className="App-in">
        <Header />
        <div className='App-page-wrapper'>
          <Navigation />
          {children}
        </div>
      </div>
  );
}

export default MainTemplate;
