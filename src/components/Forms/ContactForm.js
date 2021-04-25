import React, {useRef, useState} from 'react'
import {FormHeaderText} from '../common/FormHeaderText'
import {Input} from '../common/Input'
import {FileInput} from '../common/FileInput'
import {FlexWrapper} from '../common/FlexWrapper'
import {Radio} from '../common/Radio'
import {Checkbox} from '../common/Checkbox'
import {Button} from '../common/Button'
import {useFormik} from 'formik'
import {contactFormValidation} from '../../validations/contactFormValidation'
import {useDispatch} from 'react-redux'
import {
    setUserNameToCongratsPopup,
    toggleConfidentialityPopupIsOpened,
    toggleCongratsPopupIsOpened
} from '../../store/reducers/formReducer'
import {FormRow} from '../common/FormRow'

export const ContactForm = () => {
    const dispatch = useDispatch()
    const [uploadedFileName, setUploadedFileName] = useState('')
    const inputTypeFile = useRef()
    const formik = useFormik({
        validationSchema: contactFormValidation,
        initialValues: {
            name: '',
            surname: '',
            email: '',
            file: '',
            sex: '',
            github_link: '',
            confidentiality_check: false
        },
        onSubmit: (values, {resetForm}) => {
            dispatch(toggleCongratsPopupIsOpened(true))
            dispatch(setUserNameToCongratsPopup(values.name))
            resetForm()
        },
        validateOnMount: true,
        onReset: () => {
            setUploadedFileName('')
            inputTypeFile.current.value = ''
        }
    })
    const confidentialityClickHandler = (e) => {
        e.preventDefault()
        dispatch(toggleConfidentialityPopupIsOpened(true))
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormHeaderText>
                Личные данные
            </FormHeaderText>
            <FormRow>
                <Input
                    placeholder={'Имя'}
                    isRequired
                    label={'Имя'}
                    error={formik.errors.name && formik.touched.name ? formik.errors.name : null}
                    {...formik.getFieldProps('name')}
                />
                <Input
                    placeholder={'Фамилия'}
                    isRequired
                    label={'Фамилия'}
                    error={formik.errors.surname && formik.touched.surname ? formik.errors.surname : null}
                    {...formik.getFieldProps('surname')}
                />
            </FormRow>
            <FormRow>
                <Input
                    placeholder={'Электронная почта'}
                    isRequired
                    label={'Электронная почта'}
                    error={formik.errors.email && formik.touched.email ? formik.errors.email : null}
                    {...formik.getFieldProps('email')}
                />
                <FileInput
                    uploadedFileName={uploadedFileName}
                    setUploadedFileName={setUploadedFileName}
                    name={'file'}
                    label={'Загрузите резюме'}
                    inputTypeFile={inputTypeFile}
                    error={formik.errors.file && formik.touched.file ? formik.errors.file : null}
                    onRemoveClick={
                        () => formik.setFieldValue('file', '')
                    }
                    onInputChange={
                        (file) => formik.setFieldValue('file', file)
                    }
                />
            </FormRow>
            <FormHeaderText
                isRequired
                error={formik.errors.sex && formik.touched.sex ? formik.errors.sex : null}
            >
                Пол
            </FormHeaderText>
            <FlexWrapper>
                <Radio
                    name={'sex'}
                    label={'Мужской'}
                    value="Мужской"
                    checked={formik.values.sex === 'Мужской'}
                    onChange={() => formik.setFieldValue('sex', 'Мужской')}
                />
                <Radio
                    name={'sex'}
                    label={'Женский'}
                    value="Женский"
                    checked={formik.values.sex === 'Женский'}
                    onChange={() => formik.setFieldValue('sex', 'Женский')}
                />
            </FlexWrapper>
            <FormHeaderText>
                Github
            </FormHeaderText>
            <FormRow>
                <Input
                    placeholder={'Вставьте ссылку на Github'}
                    label={'Вставьте ссылку на Github'}
                    error={formik.errors.github_link && formik.touched.github_link ? formik.errors.github_link : null}
                    {...formik.getFieldProps('github_link')}
                />
            </FormRow>
            <Checkbox
                label={<>*Я согласен с <a href onClick={confidentialityClickHandler}>политикой
                    конфиденциальности</a></>}
                name={'confidentiality_check'}
                error={formik.errors.confidentiality_check && formik.touched.confidentiality_check ? formik.errors.confidentiality_check : null}
                checked={formik.values.confidentiality_check}
                onChange={() => formik.setFieldValue('confidentiality_check', !formik.values.confidentiality_check)}
            />
            <Button
                disabled={!formik.isValid}
                type={'submit'}>Отправить</Button>
        </form>
    )
}
