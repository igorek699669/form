import {configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import {formReducer} from './reducers/formReducer'

const rootReducer = {
    form: formReducer,
}
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})


