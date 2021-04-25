import React from 'react'

export const Radio = ({name, label,...restProps}) => {
    return (
        <label className={'radio-wrapper'}>
            <input
                name={name}
                type={'radio'}
                className={'radio-wrapper__input'}
                {...restProps}
            />
            <span className="radio-wrapper__text">{label}</span>
        </label>
    )
}
