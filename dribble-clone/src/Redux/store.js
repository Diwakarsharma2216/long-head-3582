import { createStore,combineReducers,applyMiddleware } from 'redux'
import { reducer as Authreducer } from './Auth/reducer' 
import { reducer as Productreducer } from './Product/reducer'
import thunk from "redux-thunk"
// const rootReducer =combineReducers({Authreducer,Productreducer})
const rootReducer=combineReducers({Authreducer,Productreducer})
export const store=createStore(rootReducer,applyMiddleware(thunk))