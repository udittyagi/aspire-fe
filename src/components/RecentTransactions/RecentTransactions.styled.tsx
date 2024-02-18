import styled from 'styled-components';

export const DetailsList = styled("ul")`
    list-style: none;
`;

export const DetailItem = styled("li")<{bgColor: string}>`
    justify-content: space-between;
    border-bottom: 1px solid #F0F0F0;
    padding: 24px 0px;
    &, & .txn__main {
        display: flex;
    };
    & .txn__icon {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        background-color: ${props => props.bgColor};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
    };
    & .txn__date, & .txn__vendor {
        display: block;
    }
    & .txn__vendor {
        font-size: 14px;
        font-weight: 700;
        color: #222222;
    };
    & .txn__date {
        font-size: 13px;
        color: #AAAAAA;
    };
    & .txn__amount {
        font-size: 14px;
        font-weight: bold;
        color: #222222;
        margin-right: 10px;
    }

    & .txn__amount--credit {
        color: #01D167;
    }

    & .txn__note {
        color: #325BAF;
        font-size: 12px;
        font-weight: 700px;
        margin-top: 10px;
    }

    & .txn__noteIcon {
        width: 24px;
        height: 20px;
        background-color: #325BAF;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 8px;
    }
`;
