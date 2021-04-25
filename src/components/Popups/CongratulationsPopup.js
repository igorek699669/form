import React from 'react'
import {Popup} from '../common/Popup'
import {Button} from '../common/Button'
import {useDispatch} from 'react-redux'
import {setUserNameToCongratsPopup, toggleCongratsPopupIsOpened} from '../../store/reducers/formReducer'

export const CongratulationsPopup = ({name, isOpened}) => {
    const dispatch = useDispatch()
    const handleButtonClick = () => {
        dispatch(toggleCongratsPopupIsOpened(false))
        dispatch(setUserNameToCongratsPopup(null))
    }
    return (
       <Popup className={'congratulations-popup'} isOpened={isOpened}>
           <div className="congratulations-popup__header-text">Спасибо {name}!</div>
           <div className="congratulations-popup__subheader-text">Мы скоро свяжемся с вами</div>
           <Button onClick={handleButtonClick}>Понятно</Button>
       </Popup>
    )
}
