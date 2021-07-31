import React, { useEffect, useState } from 'react';
import MainHeader from './components/main-header'
import MainFooter from './components/main-footer'
import PageContent from './components/page-content';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => document.querySelector('.app-loader').classList.add('hide'), []);

  return (
    <div className="App">
      <MainHeader setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
      <PageContent setIsMenuOpen={setIsMenuOpen}/>
      <MainFooter setIsMenuOpen={setIsMenuOpen}/>
    </div>
  );
}

export default App;
