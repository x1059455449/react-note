import { combineReducers } from 'redux'
import userinfo from './userinfo'

//这是redux的第一步定义规则，这是所有规则的入口，可以存放多个规则。
const rootReducer = combineReducers({
    userinfo
})

export default rootReducer