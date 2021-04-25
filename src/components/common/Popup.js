import React from 'react'
import cn from 'classnames'
import {AnimatePresence, motion} from 'framer-motion'

export const Popup = ({children, isOpened, className}) => {

    return (
        <AnimatePresence>
            {isOpened && <motion.div
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{ease: 'easeOut', duration: 1}}
                className={cn('popup', className)}
            >
                <div className="overlay"></div>
                <div
                    className="popup-box"
                >
                    {children}
                </div>
            </motion.div>}

        </AnimatePresence>
    )
}
