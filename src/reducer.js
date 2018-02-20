import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
  routing: routerReducer
})

export default reducer
