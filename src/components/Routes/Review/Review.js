import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
class Review extends Component {
  
  state = {
    feedback: {
      feeling: 4,
      understanding: 5,
      support: 5,
      comments: 'Awesome!'
    }
  }




handleSubmit = () => {
  console.log('In Order');
  

  Axios.post('/feedback', this.props.reduxStore.feedbackReducer)
  .then((response)=>{
    this.props.dispatch({type: 'REMOVE_FEEDBACK'})
    alert('Feedback was submitted to Database')
    this.props.history.push('/')
  })
  
}

  render(){

   
     
    return(
      <>
      <section>
      <h2>Review Your Feedback!</h2>
     

     {/* {this.props.reduxStore.feedbackReducer.map((item, i) => {
                return( <ul key={i}>
                   <li>Feeling: {item.feeling}</li>
                   <li>Understanding: {item.understanding}</li>
                   <li>Support: {item.support}</li>
                   <li>Comments: {item.comments}</li>
                   <button onClick = {(event) => this.handleSubmit()}>Complete</button>
                 </ul>)
                  })} */}


      {this.props.reduxStore.feelingReducer.map((item,i) =>{
        return(<ul key={i}><li> Feeling:  {item.feeling}</li></ul>)


      })}

       
      {this.props.reduxStore.understandingReducer.map ((item,i)=> {
         return (<ul key={i}><li> Understanding:  {item.understanding}</li></ul>)
      })}

      {this.props.reduxStore.supportReducer.map ((item,i)=> {
         return (<ul key={i}><li> Support:  {item.support}</li></ul>)
      })}

       {this.props.reduxStore.commentReducer.map ((item,i)=> {
         return (<ul key={i}><li> Comment:  {item.comment}</li></ul>)
      })}

      <button onClick = {(event) => this.handleSubmit()}>Complete</button>



      </section>
        
      </>
      )
     } //else{return(
    //   <>
    //   <section>
    //   <h2>Review Your Feedback!</h2>
     
    //   {this.props.reduxStore.feedbackReducer.map((item,i) =>{
    //    return( <ul key={i}>
    //       <li>Feeling: {item.feeling}</li>
    //       <li>Understanding: {item.understanding}</li>
    //       <li>Support: {item.support}</li>
    //       <li>Comments: {item.comments}</li>
    //       <button>Complete</button>
    //     </ul>)

    //   })}

    //   </section>
        
   
    
    //   </>
    //   )

      
    // }// end else





  // end render

}// end component

const store = (reduxStore) => ({
  reduxStore
})

export default connect(store)(Review);