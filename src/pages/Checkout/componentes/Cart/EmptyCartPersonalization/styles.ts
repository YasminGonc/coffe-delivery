import styled from 'styled-components';

export const PersonalizationContainer = styled.div`
    margin-top: 1rem;

    p {
        font-weight: 700;
    }
`
export const ImageContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
        width: 25%;
    }

    @media screen and (min-width: 1440px) {
        img {
            width: 18%;
        }
    }
`
export const AddToCart = styled.button`
    padding: 0.5rem;
    background-color: ${props => props.theme.yellowLight};
    border-radius: 6px;
    color: ${props => props.theme.yellowDark};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.yellowDark};
        color: ${props => props.theme.yellowLight};
    }
`