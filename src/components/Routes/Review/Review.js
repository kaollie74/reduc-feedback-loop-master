import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
class Review extends Component {
  
  state = {
    feedback: {
      feeling: this.props.reduxStore.feedbackReducer.feeling,
      understanding: this.props.reduxStore.feedbackReducer.understand,
      support: this.props.reduxStore.feedbackReducer.support,
      comments: this.props.reduxStore.feedbackReducer.comment
    }
  }




handleSubmit = () => {
  console.log('In Order');
  

  Axios.post('/feedback', this.state.feedback)
  .then((response)=>{
    this.props.dispatch({type: 'REMOVE_FEEDBACK'})
    alert('Feedback was submitted to Database')
    this.props.history.push('/Thankyou')
  })
  
}

  render(){

   
    if (this.state.feedback.feeling >= 0 && this.state.feedback.understanding >= 0 && this.state.feedback.support >= 0 && this.props.reduxStore.feedbackReducer.comment !== '') {
    return(
      <>
      <section>
      <h2>Review Your Feedback!</h2>
     
            
          <h2> Feelings: {this.props.reduxStore.feedbackReducer.feeling}</h2>
          <h2> Understanding: {this.props.reduxStore.feedbackReducer.understand}</h2>
          <h2> Support: {this.props.reduxStore.feedbackReducer.support}</h2>
          <h2> Comment: {this.props.reduxStore.feedbackReducer.comment}</h2>
          <button onClick = {(event) => this.handleSubmit()}>Complete</button>
             

      </section>
        
      </>
      ) // end return 
    } else {

      return(
      <>
      <section>
      <h2>Review Your Feedback!</h2>
     
            {JSON.stringify(this.state)}
          <h2> Feelings: {this.props.reduxStore.feedbackReducer.feeling}</h2>
          <h2> Understanding: {this.props.reduxStore.feedbackReducer.understand}</h2>
          <h2> Support: {this.props.reduxStore.feedbackReducer.support}</h2>
          <h2> Comment: {this.props.reduxStore.feedbackReducer.comment}</h2>
          <button disabled onClick = {(event) => this.handleSubmit()}>InComplete</button>
             

      </section>
        
      </>
      ) // end return 


    }
     } // end render
   

}// end component

const store = (reduxStore) => ({
  reduxStore
})

export default connect(store)(Review);