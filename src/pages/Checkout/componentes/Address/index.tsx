import { AddressContainer, HeaderContainer, InputCep, InputCity, InputComplement, InputNumber, InputsContainer, InputStreet, InputUf, LabelContainer, TextContainer } from './style'

import { MapPinLine } from 'phosphor-react'

export function Address() {
    return (
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
                    <input type="text" id='cep' placeholder='CEP' />
                </InputCep>

                <InputStreet>
                    <label htmlFor="rua">Rua</label>
                    <input type="text" id='rua' placeholder='Rua' />
                </InputStreet>

                <InputNumber>
                    <label htmlFor="número">Número</label>
                    <input type="text" id='número' placeholder='N°' />
                </InputNumber>

                <InputComplement>
                    <label htmlFor="complemento">Complemento</label>
                    <input type="text" id='complemento' placeholder='Complemento' />
                </InputComplement>

                <InputUf>
                    <label htmlFor="uf">UF</label>
                    <input type="text" id='uf' placeholder='UF' />
                </InputUf>

                <InputCity>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" id='cidade' placeholder='Cidade' />
                </InputCity>

            </InputsContainer>
        </AddressContainer>
    )
}