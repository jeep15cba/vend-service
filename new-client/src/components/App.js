import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from '../views/Header';
import Landing from '../views/pages/homePages/Landing';
import Dashboard from '../views/pages/Dashboard';
import InventoryListView from '../views/pages/InventoryListView';
import CustomerListView from '../views/pages/CustomerListView';
import JobListView from '../views/pages/JobListView';
import Pricing from '../views/pages/Pricing';



class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
      return (
          <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/customers" component={CustomerListView} />
                    <Route exact path="/inventory" component={InventoryListView} />
                    <Route exact path="/joblist" component={JobListView} />
                    <Route exact path="/pricing" component={Pricing} />
                </div>  
            </BrowserRouter>

          </div>
  )};
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(App);