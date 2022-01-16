import Profile from './ProfileClassComponent';
import LocalContext from './context/local';
import ThemeContext from './context/theme';

import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={'normal'}>
        <LocalContext.Provider value={'normal'}>
          <Profile />
        </LocalContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App
