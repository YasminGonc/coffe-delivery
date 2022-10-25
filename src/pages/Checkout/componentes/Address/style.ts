import styled from 'styled-components';

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: 1.125rem;
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        color: ${props => props.theme.baseSubtitle};
    }
`
export const AddressContainer = styled.div`
    background-color: ${props => props.theme.baseCard};
    border-radius: 6px;
    font-size: 0.875rem;
    color: ${props => props.theme.baseText};

    padding: 1.5rem; 
`
export const HeaderContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    color: ${props => props.theme.yellowDark};
`
export const TextContainer = styled.div`
    h3 {
        color: ${props => props.theme.baseSubtitle};
        font-size: 1rem;
        font-weight: 400;
    }
    p {
        color: ${props => props.theme.baseText};
        font-size: 0.875rem;
    }
`
export const InputsContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 
        'cep cep'
        'rua rua'
        'numero complemento'
        'uf city'
    ;
    gap: 1rem;
    color: ${props => props.theme.baseLabel};   
`
interface InputContainerProps {
    hasErrors?: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    &:first-child {
        margin-top: 1.5rem; 
    }
    
    input {
        height: 2rem; 
        padding: 0.75rem;

        color: ${props => props.theme.baseText};
        font-size: 0.875rem;
        
        border-radius: 6px;
        border: 1px solid;
        border-color: ${props => props.hasErrors ? props.theme.warning : props.theme.baseButton};
        background-color: ${props => props.theme.baseInput};

        &:focus {
            outline: 0;
            border: 2px solid ${props => props.theme.yellowDark};
        }

        &::placeholder {
            color: ${props => props.theme.baseLabel};
        }

        &:disabled {
            opacity: 0.8;
            background-color: ${props => props.theme.baseButton};
        }
    }
`
export const InputCep = styled(InputContainer)`
    grid-area: cep;
`
export const InputStreet = styled(InputContainer)`
    grid-area: rua;
`
export const InputComplement = styled(InputContainer)`
    grid-area: complemento;
`
export const InputNumber = styled(InputContainer)`
    grid-area: numero;
    width: 4rem;
`
export const InputUf = styled(InputContainer)`
    grid-area: uf;
    width: 4rem;
`
export const InputCity = styled(InputContainer)`
    grid-area: city;
`
export const Error = styled.span`
    font-size: 0.625rem;
    color: ${props => props.theme.warning};
`