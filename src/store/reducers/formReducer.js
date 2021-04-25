const TOGGLE_CONGRATS_POPUP_IS_OPENED = 'formReducer/TOGGLE_CONGRATS_POPUP_IS_OPENED'
const TOGGLE_CONFIDENTIALITY_POPUP_IS_OPENED = 'formReducer/TOGGLE_CONFIDENTIALITY_POPUP_IS_OPENED'
const SET_NAME_TO_CONGRATS_POPUP = 'formReducer/SET_VALUES_TO_CONGRATS_POPUP'
const initialState = {
    congratsPopup: {
        isOpened: false,
        userName: null
    },
    confidentialityPopupIsOpened: false
}
export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CONGRATS_POPUP_IS_OPENED:
            return {
                ...state,
                congratsPopup: {
                    ...state.congratsPopup,
                    isOpened: action.isOpened,
                }
            }
        case SET_NAME_TO_CONGRATS_POPUP:
            return {
                ...state,
                congratsPopup: {
                    ...state.congratsPopup,
                    userName: action.name
                }
            }
        case TOGGLE_CONFIDENTIALITY_POPUP_IS_OPENED:
            return {
                ...state,
                confidentialityPopupIsOpened: action.isOpened
            }
        default:
            return state
    }
}

export const toggleCongratsPopupIsOpened = (isOpened) => {
    return {
        type: TOGGLE_CONGRATS_POPUP_IS_OPENED,
        isOpened
    }
}
export const setUserNameToCongratsPopup = (name) => {
    return {
        type: SET_NAME_TO_CONGRATS_POPUP,
        name,
    }
}
export const toggleConfidentialityPopupIsOpened = (isOpened) => {
    return {
        type: TOGGLE_CONFIDENTIALITY_POPUP_IS_OPENED,
        isOpened
    }
}
