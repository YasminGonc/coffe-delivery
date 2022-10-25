import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 768px){
        padding: 1rem 0;
    }

    @media screen and (min-width: 1024px){
        padding: 2rem 0;
    }
`
export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`
export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.465rem;

    background: ${props => props.theme.purpleLight};
    border-radius: 6px;
    padding: 0.5rem;

    span {
        font-size: 0.875rem;
        color: ${props => props.theme.purpleDark};
    }
`
export const MapIcon = styled(MapPin)`
    color: ${props => props.theme.purple};
`
export const CartIcon = styled(ShoppingCart)`
    color: ${props => props.theme.yellowDark};
    width: 1rem;
    height: 1rem;
`
interface CartNavContainerProps {
    showCart?: boolean;
}

export const CartNavContainer = styled.div<CartNavContainerProps>`
    visibility: ${props => props.showCart ? 'hidden' : 'visible'};
`
export const CartNav = styled(NavLink)`
    display: flex;
    align-items: center;
    position: relative;
    
    background: ${props => props.theme.yellowLight};
    padding: 0.5rem;
    border-radius: 6px;
`
interface OrderAmountContainerProps {
    showNumber: boolean;
    showCart?: boolean;
}

export const OrderAmountContainer = styled.div<OrderAmountContainerProps>`
    visibility: ${props => props.showNumber ? 'visible' : 'hidden'};
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    background-color: ${props => props.theme.yellowDark};
    border-radius: 50%;

    font-size: 0.625rem;
    color: ${props => props.theme.white};

    width: 1rem;
    height: 1rem;

    display: ${props => props.showCart ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
`