import React from 'react'

interface PropTypes {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

const TabPanel = ({ children, value, index } : PropTypes) => {
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          className="tabpanel"
        >
          {value === index && (
            <>
                {children}
            </>
          )}
        </div>
      );
}

export default TabPanel;
