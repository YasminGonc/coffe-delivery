import { CheckoutContainer } from './style'

import { Address } from './componentes/Address'
import { Cart } from './componentes/Cart'

export function Checkout() {
    return(
        <CheckoutContainer >
            <Address />
            <Cart />
        </CheckoutContainer>
    )
}