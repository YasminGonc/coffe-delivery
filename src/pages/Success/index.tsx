import { DeliveryInfo, DollarIcon, Info, MapIcon, SuccessContainer, TimerIcon, TitleContainer } from './styles'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imageSuccess from '../../assets/success-img.png'
import { useContext } from 'react'
import { DeliveryContext } from '../../context/DeliveryContext'
import { Header } from '../../components/Header'
import { LayoutContainer } from '../../layout/DefaultLayout/style'

export function Success() {
    const { deliveryInfos, dataFromAPI } = useContext(DeliveryContext);

    return (
        <LayoutContainer>
            <Header hiddenCart/>
            <SuccessContainer>
                <TitleContainer>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </TitleContainer>

                <DeliveryInfo>
                    <Info>
                        <MapIcon>
                            <MapPin weight='fill' />
                        </MapIcon>
                        <div>
                            <p>Entrega em <strong>{dataFromAPI?.logradouro}, {deliveryInfos?.numero}</strong></p>
                            <p>{dataFromAPI?.bairro} - {dataFromAPI?.localidade}, {dataFromAPI?.uf}</p>
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
                            <strong>{deliveryInfos?.pagamento}</strong>
                        </div>
                    </Info>

                </DeliveryInfo>
                <img src={imageSuccess} />
            </SuccessContainer>
        </LayoutContainer>
    )
}