import { device } from "../../../../utils/index.ts";
import styled from "styled-components";

export const InputContainer = styled.div`
    position: relative;

    svg {
        width: 48px;
        position: absolute;
        left: 0;
        padding: 10px;
    }
`

export const Input = styled.input`
    text-indent: 60px;
    @media ${device.sm} {
        width: 327px;
        height: 50px;
        font-size: 14px;
    }

    @media ${device.md} {
        width: 704px; 
        font-size: 20px;
    }

    @media ${device.lg} {
        width: 1216px;
        font-size: 20px;
    }
    
    height: 64px;

    background-color: var(--dark-30);
    
    color: var(--dark-60);


    font-size: 20px;
    font-weight: var(--weight-500);

    border-style: none;
    outline: none;
    border-radius: 8px;
    border-color: var(--dark-40);
    border: 2px;

    &:focus {
        border: 2px solid var(--brand-color);
    }

`
