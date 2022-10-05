import { CartIcon, CartNav, HeaderContainer, IconsContainer, LocationContainer, MapIcon } from './style'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export function Header() {
    return(
        <HeaderContainer>
            <NavLink to='/' title='Home'>
                <img src={Logo} />
            </NavLink>

            <IconsContainer>
                <LocationContainer>
                    <MapIcon weight='fill' />
                    <span>Goiânia, GO</span>
                </LocationContainer>

                <CartNav to='/checkout' title='Carrinho'>
                    <CartIcon weight='fill' />
                </CartNav>
            </IconsContainer>
            
        </HeaderContainer>
    )
}