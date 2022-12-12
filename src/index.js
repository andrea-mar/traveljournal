import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import data from './data'
import Navbar from './components/Navbar';
import Card from './components/Card'

const root = ReactDOM.createRoot(document.getElementById('root'));
const travelEntries = data.map(function(entry) {
  return (
    <Card 
      key={entry.id}
      entry={entry}
    />
  )
})

root.render(
  <React.StrictMode>
    <Navbar />
    <section className='travel-entries'>
      {travelEntries}
    </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
