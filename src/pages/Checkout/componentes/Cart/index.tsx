import { AddRemove, ButtonRemove, CartContainer, Coffee, ConfirmOrder, ItemContainer, ItensContainer, Price, Total, TotalContainer, TotalItem } from './style'

import coffee from '../../../../assets/arabe.png'
import { Trash } from 'phosphor-react'

export function Cart() {
    return(
        <CartContainer>
            <h2>Cafés selecionados</h2>
            <ItensContainer>
                <ItemContainer>
                    <img src={coffee} />
                    <Coffee>Expresso tradicional</Coffee>
                    <Price>R$ 9,90</Price>
                    <AddRemove quantity={1}/>
                    <ButtonRemove>
                        <Trash />
                        Remover
                    </ButtonRemove>
                </ItemContainer>

                <ItemContainer>
                    <img src={coffee} />
                    <Coffee>Expresso tradicional</Coffee>
                    <Price>R$ 9,90</Price>
                    <AddRemove quantity={1}/>
                    <ButtonRemove>
                        <Trash />
                        Remover
                    </ButtonRemove>
                </ItemContainer>

                <TotalContainer>
                    <TotalItem>
                        <p>Total de itens</p>
                        <p>R$ 29,70</p>
                    </TotalItem>
                    <TotalItem>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </TotalItem>
                    <TotalItem>
                        <Total>Total</Total>
                        <Total>R$ 33,20</Total>
                    </TotalItem>
                </TotalContainer>

                <ConfirmOrder type='submit'>confirmar pedido</ConfirmOrder>
            </ItensContainer>
        </CartContainer>
    )
}