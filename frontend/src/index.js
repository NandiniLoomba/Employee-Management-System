import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/style.css"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='mainDiv'>
    <div><App /></div>
    <div className="footer">Copyright 2022. All Rights Reserved.</div>
  </div>
);


