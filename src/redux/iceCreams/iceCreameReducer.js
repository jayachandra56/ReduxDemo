import { BUY_ICE_CREAME } from "../ReduxConstants"

const iceCreameInitiatState={
    noOfIceCreames:20
}

const iceReducer=(state=iceCreameInitiatState,action)=>{
    switch(action.type){
        case BUY_ICE_CREAME:{
            return{
                ...state,
                noOfIceCreames:state.noOfIceCreames-1
            }
        }
        default: return state
    }
}

export default iceReducer;