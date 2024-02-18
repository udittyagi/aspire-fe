import styled from 'styled-components';

export const DebitCardsContainer = styled.div`
    & .slick-dots li button:before {
        visibility: hidden;
    }
    & .slick-dots li button {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background-color: #01D167;
        margin-top: 10px;
        opacity: 0.3;
    }
    & .slick-dots li.slick-active button {
        width: 16px;
        height: 8px;
        border-radius: 8px;
        background-color: #01D167;
        opacity: 1;
    }
`

export const InfoContainer = styled("div")`
    position: absolute;
    background-color: white;
    top: 480px;
    left: 0px;
    width: 100%;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    color: #0C365A;
    min-height: calc(100vh - 400px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    & .action__container {
        margin: -24px -24px 0px -24px;
    }
`

