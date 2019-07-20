import React, {Component} from 'react';
import Review from '../Review/Review';
import {connect} from 'react-redux'
class Support extends Component {


 state = {
    newFeeling : {
      support: ''
    }
  }



nextPage = (event)=> {
  event.preventDefault();

  this.props.dispatch({type: 'UPDATE_SUPPORT', payload: this.state.newFeeling})

  this.props.history.push('/Comment')
}  

handleChangeFor = (propsName, event) => {
  this.setState({
    newFeeling: {
      ...this.state.newFeeling,
      [propsName]: event.target.value
    }
  })
}


  render(){
    return(
      <>
      <h1>How Well are you being Supported?</h1>

      <form>
      <input type="number" placeholder="Support" onChange={(event) => this.handleChangeFor('support', event)} />
      <button onClick={this.nextPage}>Next</button>
      </form>

      <Review/>
      </>
    )
  }

}// end component

export default connect()(Support);