import styled from 'styled-components'
import bgImage from '../../../../assets/background.png'

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem 0; 

    h1 {
        color: ${props => props.theme.baseTitle};
        font-weight: 800;
        font-family: 'Baloo 2', cursive;
    }

    p {
        padding: 1rem 0;
        color: ${props => props.theme.baseSubtitle};
        font-size: 0.875rem;
    } 

    img {
        width: 80%;
        align-self: center;
    }

    @media screen and (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 40%;
        padding: 3rem 0;
        background-image: url(${bgImage});
        background-size: cover;

        p {
            padding: 1rem 0 2rem 0;
        }

        img {
            width: 100%;
        }
    }

    @media screen and (min-width: 1024px) {
        h1 {
            font-size: 2.1rem;
        }

        p {
            font-size: 1.1rem;
        }
    }

    @media screen and (min-width: 1440px) {
        padding: 5rem 0;

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.25rem;
            padding: 1rem 0 3rem 0;
        }
    }
`
export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 1rem;
    
    font-size: 0.75rem;
    color: ${props => props.theme.baseText};

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 1024px) {
        font-size: 0.75rem;
    }

    @media screen and (min-width: 1440px) {
        font-size: 1rem;
    }
`
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    padding: 0.4rem;
    border-radius: 50%;
`
export const IconShop = styled(Icon)`
    background: ${props => props.theme.yellowDark};
`
export const IconTimer = styled(Icon)`
    background: ${props => props.theme.yellow};
`
export const IconPack = styled(Icon)`
    background: ${props => props.theme.baseText};
`
export const IconCoffee = styled(Icon)`
    background: ${props => props.theme.purple};
`