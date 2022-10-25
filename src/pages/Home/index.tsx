import { CoffeeContainer, Description, HomeContainer, IconContainer, MenuContainer, QuantityContainer, ShoppContainer, Tag, TagContainer, Title } from './style';
import { Banner } from './components/Banner';
import { ShoppingCart } from 'phosphor-react';
import { ButtonAddRemove } from '../../components/ButtonAddRemove';
import { useContext } from 'react';
import { CoffeeOrderContext } from '../../context/CoffeeOrderContext';

export function Home() {
    const { coffeeOrderMenu, orderQuantity,showComponentWithOrderQuantity } = useContext(CoffeeOrderContext);

    function handleShowComponentWithOrderQuantity() {
        if (orderQuantity > 0) {
            showComponentWithOrderQuantity();
        }
    }

    return (
        <HomeContainer>
            <Banner />
            <h2>Nossos cafés</h2>
            <MenuContainer>
                {coffeeOrderMenu.map(order => {
                    return (
                        <CoffeeContainer key={order.id}>
                            <img src={order.img} />
                            <TagContainer>
                                {order.type.map((classif, index) => {
                                    return (
                                        <Tag key={index}>{classif}</Tag>
                                    )
                                })}
                            </TagContainer>
                            <Title>{order.name}</Title>
                            <Description>{order.description}</Description>
                            <ShoppContainer>
                                <p><span>R$</span>{order.price.toFixed(2).toString().replace('.', ',')}</p>
                                <QuantityContainer>
                                    <ButtonAddRemove idC={order.id} quantity={order.quantity} />
                                    <IconContainer title='Adicionar ao carrinho' onClick={handleShowComponentWithOrderQuantity}>
                                        <ShoppingCart weight='fill' />
                                    </IconContainer>
                                </QuantityContainer>
                            </ShoppContainer>
                        </CoffeeContainer>
                    )
                })}
            </MenuContainer>
        </HomeContainer>
    )
}