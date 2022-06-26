import React from 'react';
import { Header } from '../components/layout';
import template_styles from "../styles/templates/Primary.module.css";

const PrimaryTemplate = ({children}) => {
  return (
      <div className={template_styles["primary"] + " w-100 d-flex f-column"}>
        <Header />
        <div className='App-page-wrapper'>
          {children}
        </div>
      </div>
  );
}

export default PrimaryTemplate;