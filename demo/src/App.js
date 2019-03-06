import React, { Component } from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import history from './History'
import Dashboard from './component/Dashboard'


class App extends Component {
  render() {
    return (
      <div className="text container"  >        
          <Router history={history}>
            <div>
              <Switch>
              <Route path="/" exact component={Login} ></Route>
              <Route path="/Signup" exact component={Signup}></Route>
              <Route path="/Dashboard" exact component={Dashboard}></Route>
              {/* <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
              <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
              <Route path="/streams/show/:id" exact component={StreamShow}></Route> */}
              </Switch>
            </div>
          </Router>   
      </div>
    );
  }
}

export default App;
