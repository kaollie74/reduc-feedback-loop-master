import React, {Component} from 'react';
import {connect} from 'react-redux'
import Review from '../Review/Review';



class Understanding extends Component {

  state = {
    newFeeling : {
      Understanding: ''
    }
  }

nextPage = () => {
  this.props.history.push('/Support')
}


  render(){
    return(
      <>
      <h1>How Well are you Understanding this content?</h1>

      <form>
      <input type="number" placeholder="Understanding" />
      <button onClick={this.nextPage}>Next</button>
      </form>

      <Review/>

      </>
    )
  }

}// end component

export default connect()(Understanding);