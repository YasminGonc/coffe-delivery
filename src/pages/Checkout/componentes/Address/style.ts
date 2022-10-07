import styled from 'styled-components'

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: 1.125rem;
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        color: var(--baseSubtitle);
    }
`
export const AddressContainer = styled.div`
    background-color: var(--baseCard);
    border-radius: 6px;
    font-size: 0.875rem;
    color: var(--baseText);

    padding: 1.5rem; //padding desktop 2.5rem
`
export const HeaderContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    color: var(--yellowDark);
`
export const TextContainer = styled.div`
    h3 {
        color: var(--baseSubtitle);
        font-size: 1rem;
        font-weight: 400;
    }
    p {
        color: var(--baseText);
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
    color: var(--baseLabel);   
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    &:first-child {
        margin-top: 1.5rem; //2rem no desktop
    }
    
    input {
        height: 2rem; //2.625rem desktop
        padding: 0.75rem;

        color: var(--baseText);
        font-size: 0.875rem;
        
        border-radius: 6px;
        border: 1px solid var(--baseButton);
        background-color: var(--baseInput);

        &:focus {
            outline: 0;
            border: 2px solid var(--yellowDark);
        }

        &::placeholder {
            color: var(--baseLabel);
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
export const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: 0.625rem;
        color: var(--warning);
    }
`