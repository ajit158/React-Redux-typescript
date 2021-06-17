import {Transactiontypes} from '../action-types/index'
import {Actiontypes} from '../actions/index'
import { Dispatch } from 'redux'

export const depositMoney = (amount:number) => {
    return (dispatch : Dispatch<Actiontypes>) => {
        dispatch({
            type: Transactiontypes.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount:number) => {
    return (dispatch : Dispatch<Actiontypes>) => {
        dispatch({
            type: Transactiontypes.WITHDRAW,
            payload: amount
        })
    }
}

export const bankruptMoney = (amount:number) => {
    return (dispatch : Dispatch<Actiontypes>) => {
        dispatch({
            type: Transactiontypes.BANKRUPT,
            
        })
    }
}