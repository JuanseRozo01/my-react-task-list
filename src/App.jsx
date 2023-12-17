import ContextProvider from './Contexts/ContextProvider';
import AppRouter from './Routers/AppRouter';

function App() {

  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  )
  }

export default App