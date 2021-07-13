import React from 'react';
import MainHeader from './components/main-header'
import MainFooter from './components/main-footer'
import PageContent from './components/page-content';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <PageContent/>
      <MainFooter/>
    </div>
  );
}

export default App;
