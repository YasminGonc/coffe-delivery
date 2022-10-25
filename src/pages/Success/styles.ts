import styled from 'styled-components';

export const SuccessContainer = styled.div`
    margin: 0 1rem; 

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            'textTitle .'
            'deliveryInfo img'
        ;

        img {
            grid-area: img;
            width: 90%;
            align-self: flex-end;
            justify-self: center;
        }
    }

    @media screen and (min-width: 1440px) {
        img {
            width: 70%;
        }
    }
    
`
export const TitleContainer = styled.div`
    h2 {
        color: ${props => props.theme.yellowDark};
        font-size: 1.5rem; 
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        margin: 1rem 0 0.25rem 0;
    }

    p {
        color: ${props => props.theme.baseSubtitle};
        font-size: 1rem; 
    }

    @media screen and (min-width: 768px) {
        grid-area: textTitle;
    }
`
export const DeliveryInfo = styled.div`
    padding: 2rem;
    margin: 1.5rem 0;
    position: relative;

    border: 1px solid transparent;
    border-radius: 6px 36px;
    background-clip: padding-box;
    background-color: ${props => props.theme.background};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background: ${props => props.theme.linearGradient};
    }

    @media screen and (min-width: 768px) {
        grid-area: deliveryInfo;
        margin: 1.5rem 0 0 0;
    }
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
const InfoIcon = styled.div`
    padding: 0.5rem;
    border-radius: 50%;

    display: flex;
    align-items: center;

    svg {
        color: ${props => props.theme.white};
        width: 1rem;
        height: 1rem;
    }
`
export const MapIcon = styled(InfoIcon)`
    background-color: ${props => props.theme.purple}; 
`
export const TimerIcon = styled(InfoIcon)`
    background-color: ${props => props.theme.yellow}; 
`
export const DollarIcon = styled(InfoIcon)`
    background-color: ${props => props.theme.yellowDark}; 
`