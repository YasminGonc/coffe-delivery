import { HeaderContainer, PaymentContainer, TextContainer } from './style'

import { CurrencyDollar } from 'phosphor-react'

export function PaymentMethod() {
    return(
        <PaymentContainer>
            <HeaderContainer>
                <CurrencyDollar size={20} />
                <TextContainer>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </TextContainer>
            </HeaderContainer>

            <div>
                <input type="radio" name="payment" id="credit" />
                <label htmlFor="credit">Cartão de crédito</label>

                <input type="radio" name="payment" id="debit" />
                <label htmlFor="debit">Cartão de débito</label>

                <input type="radio" name="payment" id="cash" />
                <label htmlFor="cash">Dinheiro</label>
            </div>
        </PaymentContainer>
    )
}