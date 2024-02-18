import styled from 'styled-components';


export const ConfirmBoxContainer = styled("div")`
    width: 60vw;
    min-height: 100px;
    padding-bottom: 40px;
    & .btn__section {
        position: absolute;
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        justify-content: space-between;
        bottom: 0px;
        left: 0px;
        padding: 16px;
    }
    .heading {
        font-size: 16px;
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid #e6e6e6;
    }
    .subheading {
        font-size: 12px;
    }
`