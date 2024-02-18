import styled from 'styled-components';

export const Nav = styled("nav")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0px;
    height: 56px;
    width: 100vw;
    background-color: #fff;
    padding: 9px 24px;
    box-shadow: 0px -3px 6px #00000014;
`;

export const IconContainer = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 9px;
`

export const IconName = styled("div")<{isActive?: boolean}>`
    color: ${props => props.isActive ? '#01D167' : '#DDDDDD'};
    margin-top: 2px;
    font-weight: ${props => props.isActive ? 'bold' : 'normal'};
`