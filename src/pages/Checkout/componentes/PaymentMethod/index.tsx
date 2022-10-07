import { HeaderContainer, InputContainer, PaymentContainer, TextContainer } from './style'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

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

            <InputContainer>
                <input type="radio" name="payment" id="credit" />
                <label htmlFor="credit">
                    <CreditCard />
                    Cartão de crédito
                </label>

                <input type="radio" name="payment" id="debit" />
                <label htmlFor="debit">
                    <Bank />
                    Cartão de débito
                </label>

                <input type="radio" name="payment" id="cash" />
                <label htmlFor="cash">
                    <Money />
                    Dinheiro
                </label>
            </InputContainer>
        </PaymentContainer>
    )
}