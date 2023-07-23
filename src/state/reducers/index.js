import { combineReducers } from "redux"
import isDarkModeReducer  from './isDarkModeReducer'

// combine all reducers
const reducers = combineReducers({
    isdarkmode: isDarkModeReducer,


})

export default reducers
