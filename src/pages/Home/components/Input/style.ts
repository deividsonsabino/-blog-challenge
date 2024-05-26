import styled from "styled-components";

export const InputContainer = styled.div`
display:flex;
align-items: center;
    svg {
        position: absolute;
        padding:0 20px ;
    }

`

export const Input = styled.input`
    background-color: var(--dark-30);
    color: var(--dark-60);
    width: 1216px;
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
