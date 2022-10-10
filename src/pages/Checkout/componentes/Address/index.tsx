import { AddressContainer, HeaderContainer, InputCep, InputCity, InputComplement, InputNumber, InputsContainer, InputStreet, InputUf, OrderContainer, TextContainer, Error } from './style'

import { MapPinLine } from 'phosphor-react'
import { PaymentMethod } from '../PaymentMethod'
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function Address() {
    const { register, getValues, formState } = useFormContext()

    const { errors } = formState as unknown as ErrorsType;

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
                    <InputCep hasErrors={!!errors.cep?.message}>
                        <label htmlFor="cep">CEP</label>
                        <input
                            type="text"
                            id='cep'
                            placeholder='CEP'
                            {...register('cep', { valueAsNumber: false }/*, {
                                onChange: () => console.log(getValues('cep'))
                            }*/)}
                        />
                        <Error>{errors.cep?.message}</Error>
                    </InputCep>

                    <InputStreet hasErrors={!!errors.rua?.message}>
                        <label htmlFor="rua">Rua</label>
                        <input
                            type="text"
                            id='rua'
                            placeholder='Rua'
                            {...register('rua')}
                        />
                        <Error>{errors.rua?.message}</Error>
                    </InputStreet>

                    <InputNumber hasErrors={!!errors.numero?.message}>
                        <label htmlFor="numero">Número</label>
                        <input
                            type="text"
                            id='numero'
                            placeholder='N°'
                            {...register('numero', { valueAsNumber: false })}
                        />
                        <Error>{errors.numero?.message}</Error>
                    </InputNumber>

                    <InputComplement>
                        <label htmlFor="complemento">Complemento</label>
                        <input
                            type="text"
                            id='complemento'
                            placeholder='Complemento'
                            {...register('complemento')}
                        />
                    </InputComplement>

                    <InputUf hasErrors={!!errors.uf?.message}>
                        <label htmlFor="uf">UF</label>
                        <input
                            type="text"
                            id='uf'
                            placeholder='UF'
                            {...register('uf')}
                        />
                        <Error>{errors.uf?.message}</Error>
                    </InputUf>

                    <InputCity hasErrors={!!errors.cidade?.message}>
                        <label htmlFor="cidade">Cidade</label>
                        <input
                            type="text"
                            id='cidade'
                            placeholder='Cidade'
                            {...register('cidade')}
                        />
                        <Error>{errors.cidade?.message}</Error>
                    </InputCity>
                </InputsContainer>
            </AddressContainer>

            <PaymentMethod />
        </OrderContainer>
    )
}