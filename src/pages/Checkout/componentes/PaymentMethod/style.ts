import styled from 'styled-components';

interface PaymentContainerProps {
    hasError: boolean;
}

export const PaymentContainer = styled.div<PaymentContainerProps>`
    background-color: ${props => props.theme.baseCard};
    border-radius: 6px;
    border: 1px solid;
    font-size: 0.875rem;
    color: ${props => props.theme.baseText};
    border-color: ${props => props.hasError ? props.theme.warning : 'transparent'};

    padding: 1.5rem; 
    margin-bottom: 2rem;
`
export const HeaderContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    color: ${props => props.theme.purple};
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
export const InputContainer = styled.div`
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    
    input {
        display: none;
    }

    input:checked + label {
        background-color: ${props => props.theme.purpleLight};
        border: 1px solid ${props => props.theme.purple};
    }

    label {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        padding: 1rem;
        background-color: ${props => props.theme.baseButton};
        border-radius: 5px;
        color: ${props => props.theme.baseText};
        text-transform: uppercase;
        cursor: pointer;

        svg {
            color: ${props => props.theme.purple};
            width: 1rem;
            height: 1rem;
        }
    }

    label:hover {
        background-color: ${props => props.theme.baseHover};
    }
`