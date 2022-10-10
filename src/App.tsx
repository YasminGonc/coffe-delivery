import { BrowserRouter } from 'react-router-dom'
import { CoffeeOrderProvider } from './context/CoffeeOrderContext'
import { DeliveryProvider } from './context/DeliveryContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>

      <CoffeeOrderProvider>

        <DeliveryProvider>

          <Router />
          
        </DeliveryProvider>

      </CoffeeOrderProvider>
      <GlobalStyle />

    </BrowserRouter>
  )
}