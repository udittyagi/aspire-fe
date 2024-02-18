import {useState} from 'react';

import { TabItem, TabsList } from './Tabs.styled';

interface PropTypes {
    tabs: Array<string>;
    value?: number;
    onChange?: (currTab: number) => void;
    className?: string;
    tabClassName?: string;
    direction?: 'vertical' | 'horizontal';
    height?: string | number;
    width?: string | number;
}

const Tabs = ({tabs, value, onChange, className, tabClassName, direction="horizontal"}: PropTypes) => {
    const [currTab, setCurrTab] = useState(0);

    const handleChange = (idx: number) => () => {
        if(onChange) {
            onChange(idx);
        } else {
            setCurrTab(idx);
        }
    }

    const isActive = (index: number) => {
        if(value) {
            return value === index;
        }
        return currTab === index;
    }

    return (
        <TabsList role="tablist" className={className} direction={direction}>
            {
                tabs.map((tab, index) => (
                    <TabItem
                        role="tab"
                        isActive={isActive(index)}
                        className={`tab ${isActive(index) ? 'tab--active' : 'tab--inactive'} ${tabClassName ? tabClassName : ''}`}
                        onClick={handleChange(index)}
                    >
                        {tab}
                    </TabItem>
                ))
            }
        </TabsList>
    )
}

export default Tabs;
