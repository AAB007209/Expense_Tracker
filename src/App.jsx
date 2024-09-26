import './App.css'
import { SnackbarProvider } from 'notistack';
import HomePage from './HomePage/HomePage';

function App() {

  return (
    <SnackbarProvider>
      <div>
        <HomePage />
      </div>
    </SnackbarProvider>
  )
}

export default App
