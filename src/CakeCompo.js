import React,{Component} from 'react'
import { buyCake } from './redux/cakes/cakeActions';
import { connect } from 'react-redux';
class CakeCompo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Number Of Cakes Left:&nbsp;{this.props.noOfCakes}</h1>
                <button onClick={this.props.buyCake}>
                    Buy Cake
                </button>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        noOfCakes:state.cake.noOfCakes
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(CakeCompo)