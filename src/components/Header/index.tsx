import { CartIcon, CartNav, CartNavContainer, HeaderContainer, IconsContainer, LocationContainer, MapIcon, OrderAmountContainer } from './style'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeOrderContext } from '../../context/CoffeeOrderContext';

import croct from '@croct/plug';
import { useEvaluation } from '@croct/plug-react';

croct.plug({appId: '00000000-0000-0000-0000-000000000000'});

interface HeaderProps {
    hiddenCart?: boolean;
}

export function Header({ hiddenCart }: HeaderProps) {
    const location = useEvaluation<string>("location's city");
    
    const { orderQuantity, showOrderQuantity } = useContext(CoffeeOrderContext);
 
    return(
        <HeaderContainer>
            <NavLink to='/' title='Home'>
                <img src={Logo} />
            </NavLink>

            <IconsContainer>
                {location && 
                    <LocationContainer>
                        <MapIcon weight='fill' />
                        <span>{location}</span>
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