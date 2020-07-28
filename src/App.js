import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

import ShopPage from './Pages/job/job.component'
import Header from './Components/header/header.component';
import AddPage from './Pages/add-page/add-page.component.jsx'

import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import {selectJobItems} from './Redux/job/job.selectors'

class App extends Component {
 

  render() {
   
    return (
      <div className="App">
      <Header/>
        <Switch>
         <Route exact path="/" component={ShopPage} />
         <Route exact path="/add"  render={() =>
          this.props.jobList.length>0 ? (
            <AddPage />
            
          ) : (
            <Redirect to="/" />
          )
        } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  jobList: selectJobItems,
});

export default connect(mapStateToProps, null)(App);
