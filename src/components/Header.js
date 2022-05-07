import React from 'react';

const Header = ({children, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};

export default Header;