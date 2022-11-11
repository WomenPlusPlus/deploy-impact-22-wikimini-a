import { useState } from 'react';
import ActiveContext from './context';
import { AppRouter } from './routes/AppRouter'

const App = () => {
  
  const [active, setActive] = useState("owlets");

  return (
    <ActiveContext.Provider value={{active, setActive}}>
      <AppRouter />
    </ActiveContext.Provider>
  )
}

export default App
