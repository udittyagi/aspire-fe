import styled from 'styled-components';

export const AccordionContainer = styled.div`
    border: 1px solid #F0F0F0;
    border-radius: 8px;
`
export const AccordionChildren = styled.div`
    padding: 24px;
    margin-bottom: 10px;
`;

export const AccordionHeader  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    box-shadow: 0px 0px 8px #0000000A;
    border: 1px solid #F5F5F5;
    color: #0C365A;
    padding: 24px;
    background-color: #F5F9FF;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    margin: -1px;
`

export const AccordionHeading = styled.div`
    display: flex;
    align-items: center;
    & img {
        margin-right: 12px;
    }
`
