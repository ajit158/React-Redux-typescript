import {Transactiontypes} from '../action-types/index'

interface Deposit {
    type: Transactiontypes.DEPOSIT,
    payload: number
}

interface Withdraw {
    type: Transactiontypes.WITHDRAW,
    payload: number
}

interface Bankrupt {
    type: Transactiontypes.BANKRUPT
}

export type Actiontypes = Deposit | Withdraw | Bankrupt;