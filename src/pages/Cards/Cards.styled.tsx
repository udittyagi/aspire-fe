import styled from 'styled-components';

export const CardsContainer = styled.div`
    /* position: relative; */
    & .aspirelogo {
        position: absolute;
        top: 16px;
        right: 24px;
    }
    & .cardsTab {
        margin-bottom: 20px;
    }
    & .page__heading {
        font-size: 14px;
        font-weight: 700;
    }
    & .acnt__head {
        margin-bottom: 26px;
    }
    & .acnt__heading {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & .acnt__amount {
        display: flex;
        align-items: center;
    }
    & .acnt__currency {
        height: 22px;
        width: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: #01D167;
        border-radius: 4px;
        margin-right: 10px;
        font-size: 12px;
        font-weight: bold;
    }
    & .acnt__balance {
        font-size: 24px;
        font-weight: bold;
    }
    & .btn__newCard {
        font-size: 13px;
        color: #23CEFD;
        font-weight: bold;
        display: flex;
        align-items: center;
        cursor: pointer;
        & img {
            margin-right: 6px;
        }
    }
`
