import React from 'react';
import './App.scss';
import Header from './components/Header'
import Video from './components/Video'
import Album from './components/Album'

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Video />
        <Album />
        
        <div className="footer">
          &copy; 2019 Dave Gammage
          <a href="https://github.com/omfgtora" name="Website creator">
            <div className="❤️">Website made with <span role="img" aria-label="Love">❤️</span></div>
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
