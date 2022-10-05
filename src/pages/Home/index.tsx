import { CoffeeContainer, Description, HomeContainer, MenuContainer, ShoppContainer, Tag, Title } from './style'

import { Banner } from './components/Banner'
import coffee from '../../assets/arabe.png'
import { ShoppingCart } from 'phosphor-react'

export function Home() {
    return(
        <HomeContainer>
            <Banner />

            <h2>Nossos cafés</h2>
            
            <MenuContainer>
                <CoffeeContainer>
                    <img src={coffee} alt="" />

                    <Tag>Tradicional</Tag>

                    <Title>Expresso Tradicional</Title>
                    <Description>O tradicional café feito com água quente e grãos moídos</Description>

                    <ShoppContainer>
                        <p><span>R$</span>9,90</p>
                        <div>
                            <p>1</p>
                            <div>
                                <ShoppingCart />
                            </div>
                        </div>
                    </ShoppContainer>
                </CoffeeContainer>
            </MenuContainer>
        </HomeContainer>
    )
}