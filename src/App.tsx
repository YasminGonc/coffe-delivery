import { Personalization } from '@croct/plug-react'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeOrderProvider } from './context/CoffeeOrderContext'
import { DeliveryProvider } from './context/DeliveryContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { halloweenTheme } from './styles/themes/halloweenTheme'

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Customizing theme">
        <Personalization expression="today's day is 31 and today's month is 10" fallback={false}>
          {(isHalloween: boolean) => isHalloween
            ? <ThemeProvider theme={halloweenTheme}>
              <CoffeeOrderProvider>
                <DeliveryProvider>
                  <Router />
                </DeliveryProvider>
              </CoffeeOrderProvider>
              <GlobalStyle />
            </ThemeProvider>
            : <ThemeProvider theme={defaultTheme}>
              <CoffeeOrderProvider>
                <DeliveryProvider>
                  <Router />
                </DeliveryProvider>
              </CoffeeOrderProvider>
              <GlobalStyle />
            </ThemeProvider>
          }
        </Personalization>
      </Suspense>
    </BrowserRouter>
  )
}