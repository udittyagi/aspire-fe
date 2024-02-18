import styled from 'styled-components';

export const CardContainer = styled("div")<{baseColor?: string, isFrozen: boolean}>`
    height: 250px;
    display: flex;
    align-items: flex-end;
    max-width: 358px;
    width: 95%;
    opacity: ${props => props.isFrozen ? 0.5 : 1};
`;

export const CardContent = styled("div")<{baseColor?: string}>`
    height: 220px;
    width: 100%;
    border-radius: 12px;
    background-color: ${props => props.baseColor ? props.baseColor : '#01D167'};
    padding: 24px;
    font-weight: bold;
    position: relative;
    transform-style: preserve-3d;
`;

export const CardLogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const CardUserName = styled.div`
    font-size: 22px;
    margin: 1.5rem 0;
`

export const NumberUnit = styled("span")<{isLast ?: boolean}>`
    display: inline-block;
    margin-right: ${props => props.isLast ? "0px" : "1.2rem"};
    font-size: 14px;
`;

export const HiddenNumber = styled("span")<{isLast: boolean}>`
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: ${props => props.isLast ? "0px" : "6px"};
`;

export const VisibleNumber = styled("span")<{isLast: boolean}>`
    display: inline-block;
    margin-right: ${props => props.isLast ? "0px" : "6px"};
`;

export const CardText = styled("span")<{margin: string}>`
    display: inline-block;
    font-size: 13px;
    margin: ${props => props.margin ? props.margin : "0px"};
`

export const ShowSection = styled("div")<{baseColor?: string, isFrozen: boolean}>`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 40px;
    width: 151px;
    background-color: #fff;
    color: ${props => props.baseColor ? props.baseColor : '#01D167'};;
    font-size: 12px;
    padding: 5px 10px;
    right: 0px;
    top: -25px;
    border-radius: 6px 6px 0px 0px;
    transform: translateZ(-10px);
    cursor: pointer;
    pointer-events: ${props => props.isFrozen ? 'none' : 'all'};
`