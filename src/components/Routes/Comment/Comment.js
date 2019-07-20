import React, {Component} from 'react';
import Review from '../Review/Review'
class Comment extends Component {
  
  
  nextPage = () => {
  this.props.history.push('/Review')
}
  
  
  
  
  render(){

    return(
      <>
      <h1>Any Comments you want to leave?</h1>
       <form>
      <input type="text" placeholder="Support" />
      <button onClick={this.nextPage}>Next</button>
      </form>

      <Review/>
      </>


    )
  }

}// end component

export default Comment;