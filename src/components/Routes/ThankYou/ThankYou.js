import React, {Component} from 'react';
import {connect} from 'react-redux';
class Thankyou extends Component {
  
  

nextPage = (event)=> {
  event.preventDefault();

  this.props.dispatch({type: 'RESET'})

  this.props.history.push('/')
}  

  
  render(){

    return(
      <>
      <h1>Thank You!</h1>
       <form>
      <button onClick={this.nextPage}>Leave New Feedback</button>
      </form>

    
      </>


    )
  }

}// end component

export default connect()(Thankyou);