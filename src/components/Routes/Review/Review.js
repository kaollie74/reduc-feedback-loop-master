import React, {Component} from 'react';
import {connect} from 'react-redux';
class Review extends Component {
  render(){
    return(
      <>
      <section>
      <h2>Review Your Feedback!</h2>
      {this.props.reduxStore.feedbackReducer.map((item,i) =>{
       return( <ul key={i}>
          <li>Feeling: {item.feeling}</li>
          <li>Understanding: {item.understanding}</li>
          <li>Support: {item.support}</li>
          <li>Comments: {item.comments}</li>
        </ul>)
      })}

      </section>
        
   
    
      </>
    )
  }

}// end component

const store = (reduxStore) => ({
  reduxStore
})

export default connect(store)(Review);