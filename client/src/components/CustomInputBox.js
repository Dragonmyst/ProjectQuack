import React from 'react';
import classnames from 'classnames';

export const CustomInputBox = ({
    type,
    value, 
    onChange, 
    disabled,
    hasError,
    min,
}) => {
    return (
        <React.Fragment>
            <input
                type={type}
                className={classnames('custom-form-input-box', {'error': hasError})}
                value={value}
                onChange={onChange}
                disabled={disabled}
                min={min}
            />
        </React.Fragment>
    );
};