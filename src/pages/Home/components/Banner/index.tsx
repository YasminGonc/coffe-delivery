import { BannerContainer, IconCoffee, IconContainer, IconPack, IconsContainer, IconShop, IconTimer } from './style'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import banner from '../../../../assets/bannerHome.png'

export function Banner() {
    return(
        <BannerContainer>
            <div>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <IconsContainer>
                    <IconContainer>
                        <IconShop>
                            <ShoppingCart weight='fill' color='#FFFFFF'/>
                        </IconShop>
                        <span>Compra simples e segura</span>
                    </IconContainer>

                    <IconContainer>
                        <IconTimer>
                            <Timer weight='fill' color='#FFFFFF'/>
                        </IconTimer>
                        <span>Entrega rápida e rastreada</span>
                    </IconContainer>

                    <IconContainer>
                        <IconPack>
                            <Package weight='fill' color='#FFFFFF'/>
                        </IconPack>
                        <span>Embalagem mantém o café intacto</span>
                    </IconContainer>

                    <IconContainer>
                        <IconCoffee>
                            <Coffee weight='fill' color='#FFFFFF'/>
                        </IconCoffee>
                        <span>O café chega fresquinho até você</span>
                    </IconContainer>
                </IconsContainer>
            </div>

            <img src={banner} alt="Copo de café de plástico branco e tampa preta sobre um fundo amarelo com imagens de grãos de café na lateral" />
        </BannerContainer>
    )
}