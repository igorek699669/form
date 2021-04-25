import React from 'react'

export const FormHeaderText = ({children, isRequired, error}) => {
    return (
        <div className={'form-header-text'}>
            <div className="form-header-text__text">{children}{isRequired && '*'}</div>
            {error && <div className="form-header-text__error">{error}</div>}
        </div>
    )
}

