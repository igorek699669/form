import React from 'react'

export const HeaderText = ({children}) => {
    return (
        <div className={'header-text'}>
            <div className="header-text__text">{children}</div>
        </div>
    )
}

