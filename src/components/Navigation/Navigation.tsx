import { useState } from "react";

import navConfig from "./navConfig";

import { IconContainer, IconName, Nav } from "./Navigation.styled";

const Navigation = () => {
    const [activeIdx, setActiveIdx] = useState(1);
    
    const handleClick = (idx: number) => () => {
        setActiveIdx(idx);
    }
    return (
        <Nav>
            {
                navConfig.map(({name, activeIcon, inActiveIcon}, index) => (
                    <IconContainer role="link" onClick={handleClick(index)} key={name}>
                        <img src={index === activeIdx ? activeIcon : inActiveIcon} alt={name}/>
                        <IconName isActive={index === activeIdx}>{name}</IconName>
                    </IconContainer>
                ))
            }
        </Nav>
    )
}

export default Navigation;
