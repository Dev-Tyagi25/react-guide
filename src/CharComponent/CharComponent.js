import React from 'react';
import './CharComponent.css';

const charCompnent = (props) => {
    return (
        <div className="Char" onClick={props.click}>
            <p>{props.value}</p>
        </div>
    );
}

export default charCompnent;