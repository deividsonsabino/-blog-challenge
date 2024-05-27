import styled from "styled-components";
import { device } from "../../../../utils";

export const Header = styled.header`
    background-color: var(--dark-20);
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-bottom: 20px;
`

export const Logo = styled.h1`
    font-family: var(--space-grotesk);
    color: var(--dark-60);
    margin: 0;
    margin-bottom: 12px;

    @media ${device.sm} {
        font-size: 24px; 
    }
    @media ${device.md} {
        font-size: 40px; 
    }

    @media ${device.lg} {
        font-size: 40px;
    }
`

export const CodeText = styled.span`
    color: var(--brand-color);
    margin: 0;
`