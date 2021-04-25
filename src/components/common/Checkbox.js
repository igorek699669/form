import React from 'react'
import cn from 'classnames'

export const Checkbox = ({name, label, error, ...restProps}) => {
    return (
        <label className={cn('checkbox-wrapper', {'error' : error})}>
            <input
                name={name}
                type={'checkbox'}
                className={'checkbox-wrapper__input'}
                {...restProps}
            />
            <span className="checkbox-wrapper__text">{label}</span>
        </label>
    )
}
