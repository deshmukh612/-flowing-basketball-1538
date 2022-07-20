
import { legacy_createStore,combineReducers ,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import { homeReducer } from "./HomeReducer/homeReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({homeReducer})

export const store  = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))