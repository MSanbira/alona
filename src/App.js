import React, { useEffect, useState } from 'react';
import MainHeader from './components/main-header'
import MainFooter from './components/main-footer'
import PageContent from './components/page-content';
import MobileAlert from './components/small-components/mobile-alert';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timeDiff = new Date().getTime() - window.LoaderStart;
    const appLoader = document.querySelector('.app-loader');
    setTimeout(() => {
      appLoader.classList.add('is-transparent');
      setTimeout(() => appLoader.classList.add('hide'), 300)
    }, Math.max(1000 - timeDiff, 0))
  }, []);

  return (
    <div className="App">
      <MainHeader setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
      <PageContent setIsMenuOpen={setIsMenuOpen}/>
      <MainFooter setIsMenuOpen={setIsMenuOpen}/>
      <MobileAlert/>
    </div>
  );
}

export default App;
