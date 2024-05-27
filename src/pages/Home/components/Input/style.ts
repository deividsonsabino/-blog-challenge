import styled from "styled-components";

export const InputContainer = styled.div`
    //width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    svg {
        left: 0;
        position: absolute;
        padding: 20px;
    }

`

export const Input = styled.input`
    width: 1216px;
    background-color: var(--dark-30);
    color: var(--dark-60);

    height: 64px;

    font-size: 20px;
    font-weight: var(--weight-500);

    border-style: none;
    outline: none;
    border-radius: 8px;
    border-color: var(--dark-40);
    border: 2px;

    text-indent: 60px;
`
