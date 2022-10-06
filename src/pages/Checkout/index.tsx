import { CheckoutContainer } from './style'

import { Address } from './componentes/Address'
import { PaymentMethod } from './componentes/PaymentMethod'

export function Checkout() {
    return(
        <CheckoutContainer>
            <h2>Complete seu pedido</h2>
            <Address />
            <PaymentMethod />
        </CheckoutContainer>
    )
}