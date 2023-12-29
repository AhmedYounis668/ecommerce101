import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from 'redux'
import {composeWithDevTools}from 'redux-devtools-extension'
import RootReducer from './Reducers/RootReducer'

const intialstate={}

const middleware=[thunk]

const store=createStore(RootReducer,intialstate,composeWithDevTools(applyMiddleware(...middleware)))

export default store