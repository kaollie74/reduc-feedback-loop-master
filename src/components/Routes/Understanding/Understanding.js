import React, {Component} from 'react';
import {connect} from 'react-redux'
import Review from '../Review/Review';



class Understanding extends Component {

  state = {
    newFeeling : {
      understand: ''
    }
  }



nextPage = (event)=> {
  event.preventDefault();

  this.props.dispatch({type: 'UPDATE_UNDERSTANDING', payload: this.state.newFeeling})

  this.props.history.push('/Support')
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
      <h1>How Well are you Understanding this content?</h1>

      <form>
      <input type="number" placeholder="Understanding" onChange={(event) => this.handleChangeFor('understand', event)} />
      <button onClick={this.nextPage}>Next</button>
      </form>

      <Review/>

      </>
    )
  }

}// end component

export default connect()(Understanding);