import React from 'react';
import classnames from 'classnames';

export const CustomInputBox = ({
    type,
    styles,
    value, 
    placeholder,
    onChange, 
    disabled,
    hasError,
    min,
}) => {
    return (
        <div className={styles} >
            <input
                type={type}
                className={classnames('custom-form-input-box', {'error': hasError})}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                min={min}
            />
        </div>
    );
};