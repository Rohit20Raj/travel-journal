import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Page(){
  return (
    <div className='page'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
