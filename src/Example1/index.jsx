import React from 'react';
// import Card from './Component/CardClassComponent';
import Card from './Component/CardFuncComponent';
import ThemeContext from './context/theme';

import './style.css';

function Example1() {
  return (
    <div className="example1">
      <ThemeContext.Provider value={'theme-golden'}>
        <Card />
      </ThemeContext.Provider>
    </div>
  );
}

export default Example1;
