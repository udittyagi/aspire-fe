import styled from 'styled-components';

export const DialogContainer = styled("dialog")`
    position: relative;
    max-width: 90vw;
    min-width: 200px;
    padding: 24px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 0 0.5rem 0.25rem hsl(0 0% 0% / 10%);
    &:modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &::backdrop {
        background-color: rgba(33, 33, 33, 0.4);
        position: fixed;
        top: 0px;
    }
    & .btn__close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

`