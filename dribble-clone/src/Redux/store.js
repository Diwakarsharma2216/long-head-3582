import { createStore,combineReducers,applyMiddleware } from 'redux'
import { reducer as Authreducer } from './Authentication/reducer'
import { reducer as Productreducer } from "./Products/reducer"
import thunk from "redux-thunk"
// const rootReducer =combineReducers({Authreducer,Productreducer})
const rootReducer=combineReducers({Authreducer,Productreducer})
export const store=createStore(rootReducer,applyMiddleware(thunk))