import styled from 'styled-components'

interface PaymentContainerProps {
    hasError: boolean;
}

export const PaymentContainer = styled.div<PaymentContainerProps>`
    background-color: var(--baseCard);
    border-radius: 6px;
    border: 1px solid;
    font-size: 0.875rem;
    color: var(--baseText);
    border-color: ${props => props.hasError ? 'var(--warning)' : 'transparent'};

    padding: 1.5rem; //padding desktop 2.5rem
`
export const HeaderContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    color: var(--purple);
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
        background-color: var(--purpleLight);
        border: 1px solid var(--purple);
    }

    label {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        padding: 1rem;
        background-color: var(--baseButton);
        border-radius: 5px;
        color: var(--baseText);
        text-transform: uppercase;
        cursor: pointer;

        svg {
            color: var(--purple);
            width: 1rem;
            height: 1rem;
        }
    }

    label:hover {
        background-color: var(--baseHover);
    }
`