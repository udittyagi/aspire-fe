import styled from 'styled-components';

export const TabsList = styled("ul")<{direction: 'horizontal' | 'vertical', width?: string | number, height?: string | number}>`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'horizontal'};
    justify-content: flex-start;
    align-items: center;
    width: ${props => props.width ? props.width: 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    list-style: none;
`;

export const TabItem = styled("li")<{isActive?: boolean}>`
    margin-right: 30px;
    padding: 5px;
    font-size: 13px;
    opacity: 0.5;
    border-bottom: ${props => props.isActive ? '2px solid #23CEFD' : '2px solid transparent'};
    &.tab--active {
        font-weight: bold;
        opacity: 1;
    }
`;