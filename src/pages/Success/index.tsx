import { DeliveryInfo, DollarIcon, Info, MapIcon, SuccessContainer, TimerIcon, TitleContainer } from './styles'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imageSuccess from '../../assets/success-img.png'

export function Success() {
    return(
        <SuccessContainer>
            <TitleContainer>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </TitleContainer>

            <DeliveryInfo>
                <Info>
                    <MapIcon>
                        <MapPin weight='fill'/>
                    </MapIcon>
                    <div>
                        <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                        <p>Farrapos - Porto Alegre, RS</p>
                    </div>
                </Info>

                <Info>
                    <TimerIcon>
                        <Timer />
                    </TimerIcon>
                    <div>
                        <p>Previsão de entrega</p>
                        <strong>20 min - 30 min</strong>
                    </div>
                </Info>
                
                <Info>
                    <DollarIcon>
                        <CurrencyDollar />
                    </DollarIcon>
                    <div>
                        <p>Pagamento na entrega</p>
                        <strong>Cartão de Crédito</strong>
                    </div>
                </Info>

            </DeliveryInfo>
            <img src={imageSuccess} alt="" />
        </SuccessContainer>
    )
}