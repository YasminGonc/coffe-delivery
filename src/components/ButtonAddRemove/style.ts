import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.25rem;
    background-color: var(--baseButton);
    border-radius: 6px;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    button {
        display: flex;
        align-items: center;
        color: var(--purple);
        background-color: transparent;
        height: 1rem;
        cursor: pointer;
    }

    button:hover {
        color: var(--purpleDark);
    }
`