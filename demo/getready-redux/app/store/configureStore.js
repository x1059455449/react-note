import { createStore } from 'redux'
import rootReducer from '../reducers'

//创建store
export default function configureStore(initialState) {
    const store = createStore(rootReducer,initialState,
        //触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}