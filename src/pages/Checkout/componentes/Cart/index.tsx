import { AddRemove, ButtonRemove, CartContainer, CoffeeName, ConfirmOrder, ItemContainer, ItensContainer, NoOrder, Price, Total, TotalContainer, TotalItem } from './style'

import { Trash, Coffee } from 'phosphor-react'
import { Suspense, useCallback, useContext } from 'react'
import { CoffeeOrderContext } from '../../../../context/CoffeeOrderContext'
import croct from '@croct/plug';
import { EmptyCartPersonalization } from './EmptyCartPersonalization';
import { Personalization, useCroct } from '@croct/plug-react';

croct.plug({ appId: '00000000-0000-0000-0000-000000000000' });

export function Cart() {
    const { coffeeOrder, coffeeBill, removeCoffeeFromOrder } = useContext(CoffeeOrderContext);
    const hasOrders = coffeeOrder.length > 0 ? true : false;

    function handleRemoveCoffeeFromOrder(id: string) {
        removeCoffeeFromOrder(id);
    }

    const croct = useCroct();

    const setDate = useCallback(() => {
        croct.evaluate("today's weekday")
            .then(date => {
                if (date == '1') {
                    alert('Segunda é dia de frete grátis');
                }
            });
    }, [croct]);

    // if (hasOrders) {
    //     setDate();
    // }

    return (
        <CartContainer>
            <h2>Cafés selecionados</h2>
            <ItensContainer>
                {hasOrders &&
                    coffeeOrder.map(order => {
                        return (
                            <ItemContainer key={order.id}>
                                <img src={order.img} />
                                <CoffeeName>{order.name}</CoffeeName>
                                <Price>R$ {order.price.toFixed(2).toString().replace('.', ',')}</Price>
                                <AddRemove quantity={order.quantity} idC={order.id} />
                                <ButtonRemove onClick={() => handleRemoveCoffeeFromOrder(order.id)}>
                                    <Trash />
                                    Remover
                                </ButtonRemove>
                            </ItemContainer>
                        )
                    })
                }

                {!hasOrders &&
                    <NoOrder>
                        <Coffee size={24} />
                        <p>Nenhum item selecionado.</p>
                        <p>Volte para página principal para escolher seu café.</p>
                        <Suspense fallback="Personalizing suggestions">
                            <EmptyCartPersonalization />
                        </Suspense>
                    </NoOrder>
                }

                {hasOrders &&
                    <>
                        <TotalContainer>
                            <TotalItem>
                                <p>Total de itens</p>
                                <p>R$ {coffeeBill.toFixed(2).toString().replace('.', ',')}</p>
                            </TotalItem>
                            <Personalization expression="today's weekday">
                                {(date: string) => date == '1'
                                    ? <>
                                        <TotalItem>
                                            <p>Entrega</p>
                                            <p>R$ 0,00</p>
                                        </TotalItem>
                                        <TotalItem>
                                            <Total>Total</Total>
                                            <Total>R$ {(coffeeBill).toFixed(2).toString().replace('.', ',')}</Total>
                                        </TotalItem>
                                    </>
                                    : <>
                                        <TotalItem>
                                            <p>Entrega</p>
                                            <p>R$ 3,50</p>
                                        </TotalItem>
                                        <TotalItem>
                                            <Total>Total</Total>
                                            <Total>R$ {(coffeeBill + 3.5).toFixed(2).toString().replace('.', ',')}</Total>
                                        </TotalItem>
                                    </>
                                }

                            </Personalization>
                        </TotalContainer>

                        <ConfirmOrder type='submit'>confirmar pedido</ConfirmOrder>
                    </>
                }
            </ItensContainer>
        </CartContainer>
    )
}