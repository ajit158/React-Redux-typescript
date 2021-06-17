import {Transactiontypes} from '../action-types/index'
import {Actiontypes} from '../actions/index'

const initialState = 0;

const bankReducers = (state : number = initialState, action:Actiontypes) => {
  switch (action.type) {
    case Transactiontypes.DEPOSIT:
      return state + action.payload;
    case Transactiontypes.WITHDRAW:
      return state - action.payload;
    case Transactiontypes.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducers;