import React from 'react';

const EmptyLayout: React.FC = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default EmptyLayout;
