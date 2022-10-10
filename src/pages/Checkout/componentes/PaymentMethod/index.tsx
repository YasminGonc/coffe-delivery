import { HeaderContainer, InputContainer, PaymentContainer, TextContainer } from './style'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function PaymentMethod() {
    const { register, formState } = useFormContext();

    const { errors } = formState as unknown as ErrorsType;

    return(
        <PaymentContainer hasError={!!errors.pagamento?.message}>
            <HeaderContainer>
                <CurrencyDollar size={20} />
                <TextContainer>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </TextContainer>
            </HeaderContainer>

            <InputContainer>
                <input type="radio" id="credit" {...register('pagamento')} value='Cartão de crédito'/>
                <label htmlFor="credit">
                    <CreditCard />
                    Cartão de crédito
                </label>

                <input type="radio" id="debit" {...register('pagamento')} value='Cartão de débito'/>
                <label htmlFor="debit">
                    <Bank />
                    Cartão de débito
                </label>

                <input type="radio" id="cash" {...register('pagamento')} value='Dinheiro'/>
                <label htmlFor="cash">
                    <Money />
                    Dinheiro
                </label>
            </InputContainer>

            {/* <span>{errors.pagamento?.message}</span> */}
        </PaymentContainer>
    )
}