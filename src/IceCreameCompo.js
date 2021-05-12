import React,{Component} from 'react'
import { connect } from 'react-redux'
import {buyIceCreame} from './redux/iceCreams/iceCreameAction'

class IceCreameCompo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>No Of Ice Creams Left:&nbsp;{this.props.noOfIceCreames}</h1>
                <button onClick={this.props.buyIceCreame}>Bus Ice Creame</button>
            </div>
        )
    }   
}
const mapStateToProps=state=>{
    return{
        noOfIceCreames:state.iceCreame.noOfIceCreames
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyIceCreame:()=>dispatch(buyIceCreame())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreameCompo)