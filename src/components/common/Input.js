import React from 'react'
import cn from 'classnames'

export const Input = ({label, error,  name , isRequired, ...restProps}) => {
    return (
        <div className={cn('input-wrapper', {'error': error})}>
            <label htmlFor={name} className={'input-wrapper__label'}>{label}{isRequired && '*'}</label>
            <input name={name} id={name} className={'input-wrapper__input'} {...restProps}/>
            {error && <div className="input-wrapper__error-text">{error}</div>}
        </div>
    )
}
