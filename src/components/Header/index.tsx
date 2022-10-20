import { CartIcon, CartNav, CartNavContainer, HeaderContainer, IconsContainer, LocationContainer, MapIcon, OrderAmountContainer } from './style'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeOrderContext } from '../../context/CoffeeOrderContext';
import { DeliveryContext } from '../../context/DeliveryContext';

interface HeaderProps {
    hiddenCart?: boolean;
}

export function Header({ hiddenCart }: HeaderProps) {
    const { orderQuantity, showOrderQuantity } = useContext(CoffeeOrderContext);
    
    const { deliveryInfos } = useContext(DeliveryContext);
 
    return(
        <HeaderContainer>
            <NavLink to='/' title='Home'>
                <img src={Logo} />
            </NavLink>

            <IconsContainer>
                {deliveryInfos?.cidade && 
                    <LocationContainer>
                        <MapIcon weight='fill' />
                        <span>{deliveryInfos.cidade}, {deliveryInfos.uf}</span>
                    </LocationContainer>
                }

                <CartNavContainer showCart={hiddenCart}>
                    <CartNav to='/checkout' title='Carrinho'>
                        <CartIcon weight='fill' />
                        <OrderAmountContainer showNumber={showOrderQuantity} showCart={hiddenCart}>
                            <span>{orderQuantity}</span>
                        </OrderAmountContainer>
                    </CartNav>
                </CartNavContainer>
            </IconsContainer>
            
        </HeaderContainer>
    )
}