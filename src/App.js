import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/homePage/homePage';
// import ItemPage from './components/itemPage/itemPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    )
  }

}

export default App;