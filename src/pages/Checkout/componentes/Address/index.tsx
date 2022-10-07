import { AddressContainer, HeaderContainer, InputCep, InputCity, InputComplement, InputNumber, InputsContainer, InputStreet, InputUf, LabelContainer, OrderContainer, TextContainer } from './style'

import { MapPinLine } from 'phosphor-react'
import { PaymentMethod } from '../PaymentMethod'

export function Address() {
    return (
        <OrderContainer>
            <h2>Complete seu pedido</h2>
            <AddressContainer>
                <HeaderContainer>
                    <MapPinLine size={16} />
                    <TextContainer>
                        <h3>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber o pedido</p>
                    </TextContainer>
                </HeaderContainer>
                <InputsContainer>
                    <InputCep>
                        <LabelContainer>
                            <label htmlFor="cep">CEP</label>
                            <span>Erro</span>
                        </LabelContainer>
                        <input type="text" id='cep' name='cep' placeholder='CEP' />
                    </InputCep>
                    <InputStreet>
                        <label htmlFor="rua">Rua</label>
                        <input type="text" id='rua' name='rua' placeholder='Rua' />
                    </InputStreet>
                    <InputNumber>
                        <label htmlFor="numero">Número</label>
                        <input type="text" id='numero' name='numero' placeholder='N°' />
                    </InputNumber>
                    <InputComplement>
                        <label htmlFor="complemento">Complemento</label>
                        <input type="text" id='complemento' name='complemento' placeholder='Complemento' />
                    </InputComplement>
                    <InputUf>
                        <label htmlFor="uf">UF</label>
                        <input type="text" id='uf' name='uf' placeholder='UF' />
                    </InputUf>
                    <InputCity>
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" id='cidade' name='cidade' placeholder='Cidade' />
                    </InputCity>
                </InputsContainer>
            </AddressContainer>
            
            <PaymentMethod />
        </OrderContainer>
    )
}