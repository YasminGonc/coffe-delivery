import styled from 'styled-components'

export const PaymentContainer = styled.div`
    background-color: var(--baseCard);
    border-radius: 6px;
    font-size: 0.875rem;
    color: var(--baseText);

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