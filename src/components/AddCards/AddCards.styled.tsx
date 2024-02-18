import styled from 'styled-components';

export const AddCardsContainer = styled("div")`
    width: 75vw;
    height: 300px;
    & .heading__modal {
        font-size: 16px;
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid #e6e6e6;
    }

    & input {
        padding: 12px;
        border: 1px solid #757575;
        border-radius: 4px;
        display: block;
        margin-bottom: 16px;
    }

    & label {
        font-size: 14px;
        font-weight: bold;
        color: #494949;
        margin-bottom: 6px;
        display: block;
    }

    & .footer__modal {
        width: 100%;
        position: absolute;
        bottom: 0px;
        left:0px;
        padding: 16px;
        display: flex;
        justify-content: flex-end;
    }
`