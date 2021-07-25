import React from 'react';
import classnames from 'classnames';

export const PrependedTextInput = ({
    prependItem, 
    value, 
    onChange, 
    disabled,
    required,
    hasError
}) => {
    return (
        <div className={classnames('prepend-group-box', {'error': hasError})}>
            <span className={classnames({'required-astrix': required})}>{prependItem}</span>
            <input
                type="text"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};