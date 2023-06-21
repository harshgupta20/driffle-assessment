import './App.css';

// PAGES
import Home from './pages/Home';

//CONTEXT
import { createContext, useState } from 'react';
export const AppContext = createContext();

function App() {

  // Special state To Check if anything updated in app
  const [update, setUpdate] = useState(false);

  return (
    <>
      <AppContext.Provider value={{update, setUpdate}}>
        <Home />
      </AppContext.Provider>
    </>
  );
}

export default App;
