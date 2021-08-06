import React from 'react';
import classnames from 'classnames';

export const PrependDateInput = ({
    prependItem,
    onChange,
    disabled,
    required,
    hasError
}) => {
    return (
        <div className={classnames('prepend-group-box prepended-date-box', { 'error': hasError })}>
            <span className={classnames({ 'required-astrix': required })}>{prependItem}</span>
            <input
                type="date"
                defaultValue={new Date().toLocaleDateString("en-CA")}
                className="mr-3"
                min={new Date().toLocaleDateString("en-CA")}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};