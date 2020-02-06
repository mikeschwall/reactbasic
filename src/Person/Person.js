import React from 'react';

const Person = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            {props.myname}
        </div>
    )
};

export default Person;