import React from 'react';
import classnames from 'classnames';

export const PrependedTextInput = ({
    prependItem,
    styles,
    value,
    placeholder,
    onChange,
    disabled,
    required,
    hasError
}) => {
    return (
        <div className={styles} >
            <div className={classnames('prepend-group-box mr-2', { 'error': hasError })}>
                <span className={classnames({ 'required-astrix': required })}>{prependItem}</span>
                <input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};