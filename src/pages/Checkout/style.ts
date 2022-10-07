import styled from 'styled-components'
import { Form } from 'react-router-dom'

export const CheckoutContainer = styled.form`
    padding: 0 1rem; //padding lateral para o mobile

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`