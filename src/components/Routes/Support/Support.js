import React, {Component} from 'react';
import Review from '../Review/Review';

class Support extends Component {

nextPage = () => {
  this.props.history.push('/Comment')
}
  render(){
    return(
      <>
      <h1>How Well are you being Supported?</h1>

      <form>
      <input type="number" placeholder="Support" />
      <button onClick={this.nextPage}>Next</button>
      </form>

      <Review/>
      </>
    )
  }

}// end component

export default Support;