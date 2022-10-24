import styled from 'styled-components'
import { ButtonAddRemove } from '../../../../components/ButtonAddRemove'

export const CartContainer = styled.div`
    margin-bottom: 2rem;
    
    h2 {
        margin-bottom: 1rem;
        font-size: 1.125rem;
    }
`
export const ItensContainer = styled.div`
    background-color: var(--baseCard);
    border-radius: 6px 44px;
    padding: 1.5rem; //desktop 2.5rem

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
        'image coffee coffee price'
        'image quantity remove .'
    ;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--baseButton);

    img {
        width: 95%;
        align-self: center;
        grid-area: image;
    }

    @media screen and (min-width: 1440px) {
        grid-template-rows: auto 2rem;
        img {
            width: 75%;
        } 
    }
`
export const CoffeeName = styled.p`
    color: var(--baseSubtitle);
    grid-area: coffee;
    font-size: 0.875rem; 

    @media screen and (min-width: 1440px) {
        font-size: 1rem; 
    }
`
export const Price = styled.p`
    font-weight: 700;
    grid-area: price;
    font-size: 0.875rem; 

    @media screen and (min-width: 1440px) {
        font-size: 1rem; 
    }
`
export const ButtonRemove = styled.button`
    grid-area: remove;
    text-transform: uppercase;
    font-size: 0.75rem;

    padding: 0.5rem;
    background-color: var(--baseButton);
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    svg {
        width: 0.75rem;
        height: 0.75rem;
        color: var(--purple);
    }

    &:hover {
        background-color: var(--baseHover);
    }

    @media screen and (min-width: 1440px) {
        svg {
            width: 1rem;
            height: 1rem;
        }
    }
`
export const AddRemove = styled(ButtonAddRemove)`
    grid-area: quantity;
`
export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
`
export const TotalItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Total = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--baseSubtitle);
`
export const ConfirmOrder = styled.button`
    background-color: var(--yellow);
    border-radius: 6px;
    padding: 0.75rem;

    font-size: 0.875rem;
    text-transform: uppercase;
    color: var(--white);
    cursor: pointer;

    &:hover {
        background-color: var(--yellowDark);
    }
`
export const NoOrder = styled.div`
    text-align: center;
`