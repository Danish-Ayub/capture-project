import React from 'react';
// Import pages
import AboutUs from './pages/AboutUs';
// global styles
import GlobalStyle from './components/GlobalStyled';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
