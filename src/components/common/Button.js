import React from 'react'

export const Button = ({children,...restProps }) => {
    return (
        <button className={'button'} {...restProps}>
            {children}
        </button>
    )
}
