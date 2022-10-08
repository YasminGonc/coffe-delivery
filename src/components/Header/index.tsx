import { CartIcon, CartNav, HeaderContainer, IconsContainer, LocationContainer, MapIcon } from './style'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface Locale {
    locality: string;
    region_code: string;
}

export function Header() {
    // const [latitude, setLatitude] = useState(0);
    // const [longitude, setLongitude] = useState(0);
    // const [locale, setLocale] = useState<Locale>();

    // function getLocation() {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         setLatitude(position.coords.latitude);
    //         setLongitude(position.coords.longitude);
    //     });
    // }

    // useEffect(() => {
    //     getLocation();
    // }, [])
    
    
    // useEffect(() => {
    //     fetch(`http://api.positionstack.com/v1/reverse?access_key=6edfa145c67617953e0582f72ca60b40&query=${latitude},${longitude}`)
    //         .then(response => response.json())
    //         .then(data => console.log(data))

    // }, [latitude, longitude])

    //console.log(latitude)

 
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