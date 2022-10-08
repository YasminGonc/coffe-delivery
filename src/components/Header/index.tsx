import { CartIcon, CartNav, HeaderContainer, IconsContainer, LocationContainer, MapIcon } from './style'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export function Header() {
    useEffect(() => {

    }, [])

    function getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitude, longitude);
        });
    }

    getLocation()

    //http://api.positionstack.com/v1/reverse?access_key=6edfa145c67617953e0582f72ca60b40&query=-21.1411746,-47.8155695
    
    
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