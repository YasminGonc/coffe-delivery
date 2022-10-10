import { CartIcon, CartNav, CartNavContainer, HeaderContainer, IconsContainer, LocationContainer, MapIcon, OrderAmountContainer } from './style'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeeOrderContext } from '../../context/CoffeeOrderContext';

interface Locale {
    locality: string;
    region_code: string;
}

interface HeaderProps {
    hiddenCart?: boolean;
}

export function Header({ hiddenCart }: HeaderProps) {
    const { orderQuantity, showOrderQuantity } = useContext(CoffeeOrderContext);
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