import styled from 'styled-components';

export const ActionsContainer = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 116px;
    overflow: hidden;
    background-color: #EDF3FF;
    color: #0C365A;
    font-size: 13px;
    padding: 24px;
    gap: 2px;
`

export const ActionItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 70px;
`