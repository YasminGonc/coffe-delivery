import { CartIcon, CartNav, CartNavContainer, HeaderContainer, IconsContainer, LocationContainer, MapIcon, OrderAmountContainer } from './style'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeeOrderContext } from '../../context/CoffeeOrderContext';
import { DeliveryContext } from '../../context/DeliveryContext';

interface HeaderProps {
    hiddenCart?: boolean;
}

export function Header({ hiddenCart }: HeaderProps) {
    const { orderQuantity, showOrderQuantity } = useContext(CoffeeOrderContext);
    
    const { dataFromAPI } = useContext(DeliveryContext);
 
    return(
        <HeaderContainer>
            <NavLink to='/' title='Home'>
                <img src={Logo} />
            </NavLink>

            <IconsContainer>
                {dataFromAPI?.localidade && 
                    <LocationContainer>
                        <MapIcon weight='fill' />
                        <span>{dataFromAPI.localidade}, {dataFromAPI.uf}</span>
                    </LocationContainer>
                }

                <CartNavContainer showCart={hiddenCart}>
                    <CartNav to='/checkout' title='Carrinho'>
                        <CartIcon weight='fill' />
                        <OrderAmountContainer showNumber={showOrderQuantity}>
                            <span>{orderQuantity}</span>
                        </OrderAmountContainer>
                    </CartNav>
                </CartNavContainer>
            </IconsContainer>
            
        </HeaderContainer>
    )
}