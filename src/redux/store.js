import {createStore,applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import Logger from 'redux-logger'
import {reducer} from './data/reducer'

const store = createStore(reducer,applyMiddleware(Thunk,Logger))

export default store