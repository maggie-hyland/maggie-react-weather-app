import React from 'react';
import './css/Style.css';
import Weather from './Weather';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='New York' />
        <footer>
          Coded by Maggie Hyland. Open-sourced on{' '}
          <a
            href='https://github.com/maggie-hyland/maggie-react-weather-app'
            target='-blank'
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
