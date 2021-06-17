import {combineReducers} from 'redux'
import bankReducers from './bankreducers'


const reducers = combineReducers({
    bank : bankReducers
})

export default reducers;

export type State = ReturnType<typeof reducers>