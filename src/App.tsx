import { BrowserRouter } from 'react-router-dom'
import { CoffeeOrderProvider } from './context/CoffeeOrderContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <CoffeeOrderProvider>
        <Router />
      </CoffeeOrderProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}