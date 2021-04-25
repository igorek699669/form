import React from 'react'
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'
import {ImAttachment} from 'react-icons/im'
import cn from 'classnames'

export const FileInput = ({name, uploadedFileName, setUploadedFileName, inputTypeFile, label, onInputChange, onRemoveClick, error, ...restProps}) => {

    const handleInputChange = (e) => {
        if (e.target.files.length) {
            setUploadedFileName(e.target.files[0].name)
            onInputChange(e.target.files[0])
        } else {
            setUploadedFileName('')
            onInputChange('')
        }
    }
    const handleRemoveUploadedFile = (e) => {
        setUploadedFileName('')
        inputTypeFile.current.value = ''
        onRemoveClick()
    }
    return (
        <>
            {uploadedFileName ? (
                <div className={cn('uploaded-file-wrapper', {'error': error})}>
                    <ImAttachment className={'uploaded-file-wrapper__icon'} size={'11px'} color={'#8C8C8C'}/>
                    <div className="uploaded-file-wrapper__text">
                        {uploadedFileName}
                    </div>
                    <AiOutlineClose onClick={handleRemoveUploadedFile} className={'uploaded-file-wrapper__remove'}
                                    size={'14px'} color={'#8C8C8C'}/>
                    {error && <div className={'uploaded-file-wrapper__error'}>
                        {error}
                    </div>}
                </div>


            ) : (
                <label htmlFor={'file'} className={'file-input-wrapper'}>
                    <AiOutlinePlus className={'file-input-wrapper__icon'} color={'#8C8C8C'} size={'16px'}/>
                    <span className="file-input-wrapper__text">{label}</span>
                    {error && <div className={'file-input-wrapper__error'}>
                        {error}
                    </div>}
                </label>
            )}
            <input id={'file'} ref={inputTypeFile} name={name} onChange={handleInputChange} type={'file'}
                   className={'file-input-wrapper__input'} {...restProps}/>
        </>
    )
}
