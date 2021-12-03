import {ADD_SHIRST_ITEM,ACCESS_DATA,ADD_PENTS_ITEM,REMOVE_SHIRTS_ITEM,
     REMOVE_PENT_ITEM,ADD_CUSTOMER,SHIRT_MEASUREMENT,PENT_MEASUREMENT} from './createAction'

const initial ={
    users :[],
    shirts : [],
    pents : [],
}

export const reducer=(state=initial,action)=>{
    switch(action.type){
        case ADD_SHIRST_ITEM :
            return {
                ...state,
                shirts : action.payLoad
            }
        case ADD_PENTS_ITEM:
            return{
                ...state,
                pents : action.payLoad
            }
        case ACCESS_DATA:
            console.log(action.payLoad);
            return state = action.payLoad
        case REMOVE_SHIRTS_ITEM:
            return{
                ...state,
                shirts : action.payLoad
            }
        case REMOVE_PENT_ITEM:
            return{
                ...state,
                pents : action.payLoad
            }
        case ADD_CUSTOMER:
            return{
                ...state,
                users : action.payLoad
            }
        case SHIRT_MEASUREMENT:
            return{
                ...state,
                users : action.payLoad
            }
        case PENT_MEASUREMENT:
            return{
                ...state,
                users : action.payLoad
                }
        default :
            return state
    }
}