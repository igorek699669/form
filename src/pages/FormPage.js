import React from 'react'
import {Container} from '../components/common/Container'
import {HeaderText} from '../components/common/HeaderText'
import {ContactForm} from '../components/Forms/ContactForm'
import {CongratulationsPopup} from '../components/Popups/CongratulationsPopup'
import {useSelector} from 'react-redux'
import {ConfidentialityPopup} from '../components/Popups/ConfidentialityPopup'

export const FormPage = () => {
    const {congratsPopup} = useSelector(state => state.form)
    const {confidentialityPopupIsOpened} = useSelector(state => state.form)
    return (
        <>
            <Container>
                <HeaderText>Анкета соискателя</HeaderText>
                <ContactForm/>
                <CongratulationsPopup
                    isOpened={congratsPopup?.isOpened}
                    name={congratsPopup?.userName}
                />
                <ConfidentialityPopup
                    isOpened={confidentialityPopupIsOpened}
                />
            </Container>
        </>
    )
}
