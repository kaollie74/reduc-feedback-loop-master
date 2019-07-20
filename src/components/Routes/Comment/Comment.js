import React, {Component} from 'react';
import Review from '../Review/Review'
import {connect} from 'react-redux';


class Comment extends Component {
  
  
  state = {
    newFeeling : {
      comment: ''
    }
  }



nextPage = (event)=> {
  event.preventDefault();

  this.props.dispatch({type: 'UPDATE_COMMENT', payload: this.state.newFeeling})

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
      <h1>Any Comments you want to leave?</h1>
       <form>
      <input type="text" placeholder="Comment" onChange={(event) => this.handleChangeFor('comment', event)}  />
      <button onClick={this.nextPage}>Next</button>
      </form>

      <Review/>
      </>


    )
  }

}// end component

export default connect()(Comment);