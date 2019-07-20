import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';


//Routes 
import Feeling from '../Routes/Feeling/Feeling';
import Understanding from '../Routes/Understanding/Understanding';
import Supported from '../Routes/Support/Support';
import Comments from '../Routes/Comment/Comment';
import Review from '../Routes/Review/Review';
import Submit from '../Routes/Submit/Submit';


class App extends Component {


  render() {
    return (

      <>
     <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    



      <section>
        <Router>
        <Route path="/" exact component={Feeling} />
        <Route path="/Understanding" component={Understanding} />
        <Route path="/Support" component={Supported} />
        <Route path="/Comment" component={Comments} />
        <Route path="/Review" component={Review} />
        <Route path="/Submit" component={Submit} />

        </Router>
      </section>
    
      </>
      
    );
  }
}

export default App;
