import React from 'react';

export const PrependedTextInput = ({prependItem, value, onChange, disabled}) => {
    return (
        <div className="prepend-group-box">
            <span>{prependItem}</span>
            <input
                type="text"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};