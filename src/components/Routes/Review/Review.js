import React, {Component} from 'react';
import {connect} from 'react-redux';
class Review extends Component {
  
  state = {
    button: 'incomplete'
  }
  render(){


     if(this.state.button === 'incomplete'){
    return(
      <>
      <section>
      <h2>Review Your Feedback!</h2>
     
      {this.props.reduxStore.feelingReducer.map((item,i) =>{
        return(<ul key={i}><li> Feeling:  {item.feeling}</li></ul>)


      })}

       
      {this.props.reduxStore.understandingReducer.map ((item,i)=> {
         return (<ul key={i}><li> Understanding:  {item.understanding}</li></ul>)
      })}

      {this.props.reduxStore.supportReducer.map ((item,i)=> {
         return (<ul key={i}><li> Support:  {item.support}</li></ul>)
      })}

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





  }// end render

}// end component

const store = (reduxStore) => ({
  reduxStore
})

export default connect(store)(Review);