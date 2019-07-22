import React, {Component} from 'react';
import Review from '../Review/Review'
import {connect} from 'react-redux';



class Feeling extends Component {

  state = {
    newFeeling : {
      feeling: ''
    }
  }
  
nextPage = (event)=> {
  event.preventDefault();

  this.props.dispatch({type: 'UPDATE_FEELING', payload: this.state.newFeeling})

  this.props.history.push('/Understanding')
}  

handleChangeFor = (propsName, event) => {
  this.setState({
    newFeeling: {
      
      [propsName]: event.target.value
    }
  })
}

  render(){


    return(
     <>
      <section className = "feeling">
        <h1>How are you Feeling today?</h1>

        <form >
        <input type="number" placeholder="Feeling" onChange={(event) => this.handleChangeFor('feeling', event)} />
        <button onClick={this.nextPage} type="submit">Next</button>
        </form>

        <Review/>
      
        </section>
    </>
   
    )
  }

}// end component



export default connect()(Feeling);