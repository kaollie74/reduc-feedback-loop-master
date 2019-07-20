import React, {Component} from 'react';
import Review from '../Review/Review'







class Feeling extends Component {
  
nextPage = ()=> {
  this.props.history.push('/Understanding')
}  

  render(){


    return(
     <>
      <h1>How are you Feeling today?</h1>

      <form>
      <input type="number" placeholder="Feeling" />
      <button onClick={this.nextPage}>Next</button>
      </form>
      
      <Review/>
      </>
   
    )
  }

}// end component

export default Feeling;