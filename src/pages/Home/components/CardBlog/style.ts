import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--dark-20);

    margin: auto;
    margin-top: 24px;

    max-width: 1216px;
    height: 243px;

    border: 2px solid #252529;
    border-radius: 8px;

    &:hover {
        border: 2px solid var(--brand-color);
    }
`

export const CardContent = styled.div`
    padding: 40px;
   
`
export const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
`

export const Date = styled.span`
    color: var(--brand-color);
    font-size: 16px;
`
export const CardTitle = styled.h2`
    font-family: var(--space-grotesk);
    color: var(--dark-60);
`
export const CardSDescription = styled.p`
    color: var(--dark-50);
    font-size: 20px;
`