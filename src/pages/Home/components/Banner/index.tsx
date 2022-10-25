import { BannerContainer, IconCoffee, IconContainer, IconPack, IconsContainer, IconShop, IconTimer } from './style'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import banner from '../../../../assets/bannerHome.png'
import { Personalization } from '@croct/plug-react'

export function Banner() {
    return (
        <BannerContainer>
            <div>
                <Personalization expression="location's city">
                    {(city: string) => city
                        ? <h1>Está na correria de {city}? Encontre o café perfeito para qualquer hora do dia</h1>
                        : <h1>Encontre o café perfeito para qualquer hora do dia</h1>}
                </Personalization>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <IconsContainer>
                    <IconContainer>
                        <IconShop>
                            <ShoppingCart weight='fill' color='#FFFFFF' />
                        </IconShop>
                        <span>Compra simples e segura</span>
                    </IconContainer>

                    <IconContainer>
                        <IconTimer>
                            <Timer weight='fill' color='#FFFFFF' />
                        </IconTimer>
                        <Personalization expression="location's city">
                            {(city: string) => city
                                ? <span>Entrega rápida e rastreada para {city}</span>
                                : <span>Entrega rápida e rastreada</span>}
                        </Personalization>
                    </IconContainer>

                    <IconContainer>
                        <IconPack>
                            <Package weight='fill' color='#FFFFFF' />
                        </IconPack>
                        <span>Embalagem mantém o café intacto</span>
                    </IconContainer>

                    <IconContainer>
                        <IconCoffee>
                            <Coffee weight='fill' color='#FFFFFF' />
                        </IconCoffee>
                        <span>O café chega fresquinho até você</span>
                    </IconContainer>
                </IconsContainer>
            </div>

            <img src={banner} alt="Copo de café de plástico branco e tampa preta sobre um fundo amarelo com imagens de grãos de café na lateral" />
        </BannerContainer>
    )
}