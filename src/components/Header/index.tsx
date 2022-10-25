import { CartIcon, CartNav, CartNavContainer, HeaderContainer, IconsContainer, LocationContainer, MapIcon, OrderAmountContainer } from './style'

import Logo from '../../assets/logo.png'
import HalloweenLogo from '../../assets/logo-halloween.png'
import { NavLink } from 'react-router-dom'
import { Suspense, useContext } from 'react'
import { CoffeeOrderContext } from '../../context/CoffeeOrderContext';

import { Personalization, useEvaluation } from '@croct/plug-react';


interface HeaderProps {
    hiddenCart?: boolean;
}

export function Header({ hiddenCart }: HeaderProps) {
    const location = useEvaluation<string | null>("location's city");

    const { orderQuantity, showOrderQuantity } = useContext(CoffeeOrderContext);

    return (
        <HeaderContainer>
            <Suspense fallback="Customizing logo theme">
                <Personalization expression="today's day is 31 and today's month is 10" fallback={false}>
                    {(isHalloween: boolean) =>
                        <NavLink to='/' title='Home'>
                            <img src={isHalloween ? HalloweenLogo : Logo} />
                        </NavLink>
                    }
                </Personalization>
            </Suspense>

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