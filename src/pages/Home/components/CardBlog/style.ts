import { device } from '../../../../utils/index.ts';
import styled from "styled-components";

export const Card = styled.div`

    @media ${device.sm} {
        width: 327px;
        height: 330px;

    }

    @media ${device.md} {
        width: 704px; 
        height: 248px;
    }

    @media ${device.lg} {
        width: 1216px;
        height: 243px;
    }

    padding: 32px 24px 32px 24px;

    gap: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--dark-20);

    margin: auto;
    margin-top: 24px;

    max-width: 1216px;

    border: 2px solid #252529;
    border-radius: 8px;

    &:hover {
        transition-duration: 1s;
        border: 2px solid var(--brand-color);
    }
`

export const CardContent = styled.div`
   
`
export const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
`

export const Date = styled.span`
    @media ${device.sm} {
        font-size: 12px;
    }

    @media ${device.md} {
        font-size: 14px; 
    }

    @media ${device.lg} {
        font-size: 16px;
    }

    color: var(--brand-color);
    font-size: 16px;
`
export const CardTitle = styled.h2`

    @media ${device.sm} {
        font-size: 20px; 
    }
    @media ${device.md} {
        font-size: 16px; 
    }

    @media ${device.lg} {
        font-size: 40px;
    }

    font-family: var(--space-grotesk);
    color: var(--dark-60);
`
export const CardSDescription = styled.p`
    margin-top: 12px;
    @media ${device.sm} {
        font-size: 14px;
        line-height: 22.4px;
    }

    @media ${device.md} {
        font-size: 16px; 
        line-height: 25.6px;
    }

    @media ${device.lg} {
        font-size: 20px;
        line-height: 32x;
    }

    color: var(--dark-50);
`

