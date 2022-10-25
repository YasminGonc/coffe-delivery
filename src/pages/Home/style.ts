import styled from 'styled-components';

export const HomeContainer = styled.div`
    padding: 0 1rem; 

    h2 {
        padding: 2rem 0;
        color: ${props => props.theme.baseSubtitle};
        font-family: 'Baloo 2', cursive;
    }

    @media screen and (min-width: 768px){
        padding: 0;
    }

    @media screen and (min-width: 1024px){
        
    }

    @media screen and (min-width: 1440px) {
        h2 {
            font-size: 2rem;
            padding: 0;
        }
        
        margin-bottom: 2rem;
    }
`
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 1440px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 3.5rem;
        margin-top: 3rem;
    }
`
export const CoffeeContainer = styled.div`
    width: 16rem;
    background-color: ${props => props.theme.baseCard};
    border-radius: 6px 32px 6px 32px;
    font-family: 'Roboto', sans-serif;

    margin: 0 1.5rem 3rem 1.5rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: -2.2rem;
    }

    @media screen and (min-width: 1024px){
        justify-self: center;
    }

    @media screen and (min-width: 1440px) {
        justify-self: center;
        margin: 0;
    }
`
export const TagContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
`
export const Tag = styled.span`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
    color: ${props => props.theme.yellowDark};

    margin: 1rem 0 1.25rem 0;
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme.yellowLight};
    border-radius: 100px;
`
export const Title = styled.h3`
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme.baseTitle};
    font-weight: 700;
    font-size: 1.25rem;
`
export const Description = styled.p`
    color: ${props => props.theme.baseLabel};
    font-size: 0.875rem;
    text-align: center;

    margin: 0.5rem 0 1rem 0;
`
export const ShoppContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.baseText};

    p {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-weight: 800;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        margin-right: 0.4rem;
    }
`
export const QuantityContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`
export const IconContainer = styled.button`
    display: flex;
    align-items: center;

    color: ${props => props.theme.white};
    background-color: ${props => props.theme.purple};
    border-radius: 6px;
    padding: 0.5rem 0.6rem;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.purpleDark};
    }
`