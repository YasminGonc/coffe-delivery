import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

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

    background: var(--purpleLight);
    border-radius: 6px;
    padding: 0.5rem;

    span {
        font-size: 0.875rem;
        color: var(--purpleDark);
    }
`
export const MapIcon = styled(MapPin)`
    color: var(--purple);
`
export const CartIcon = styled(ShoppingCart)`
    color: var(--yellowDark);
    width: 1rem;
    height: 1rem;
`
export const CartNav = styled(NavLink)`
    display: flex;
    align-items: center;
    
    background: var(--yellowLight);
    padding: 0.5rem;
    border-radius: 6px;
`