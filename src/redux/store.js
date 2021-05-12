import {combineReducers, createStore} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceReducer from './iceCreams/iceCreameReducer';


// const store = createStore(cakeReducer);
const store = createStore(combineReducers({cake:cakeReducer,iceCreame:iceReducer}));


 export default store;
