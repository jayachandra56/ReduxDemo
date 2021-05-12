import { BUY_CAKE } from "./cakeConstants"

const initialState={
    noOfCakes:11
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            noOfCakes:state.noOfCakes-1
        }
        default: return state  

    }
}
export default cakeReducer