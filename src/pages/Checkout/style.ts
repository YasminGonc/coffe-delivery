import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    padding: 0 1rem; 

    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        form {
            flex-direction: row;
        }   
    }
`