import {useState} from 'react';

import { AccordionHeader, AccordionHeading, AccordionChildren, AccordionContainer } from './Accordion.styled';

import upArrow from '../../../assets/images/mobile/up-arrow.svg';
import downArrow from '../../../assets/images/mobile/down-arrow.svg';

interface PropTypes {
    heading: string;
    icon?: string;
    defaultOpen?: boolean;
    children?: React.ReactNode;
    className?: string;
    headerClassName?: string
}
const Accordion = ({heading, icon, defaultOpen = false, children, className, headerClassName}: PropTypes) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const handleOpen = () => {
        setIsOpen(prevOpen => !prevOpen)
    }

    return (
        <AccordionContainer className={className}>
            <AccordionHeader className={headerClassName} onClick={handleOpen}>
                <AccordionHeading className='heading'>
                    {icon && <img alt={heading} src={icon} />}
                    <span>{heading}</span>
                </AccordionHeading>
                <img 
                    src={isOpen ? upArrow : downArrow}
                    alt={isOpen ? 'Up Arrow' : 'Down Arrow' }
                />
            </AccordionHeader>
            {
                isOpen ? (
                    <AccordionChildren>
                        {
                            children
                        }
                    </AccordionChildren>
                ) : null
            }

        </AccordionContainer>
    )
}

export default Accordion;
