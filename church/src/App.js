import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoezeHa from './components/pages/MoezeHa/MoezeHa';
import KhaneSorod from './components/pages/KhaneSorod/KhaneSorod';

function App() {
  return (
    <div className="App">
      <Router>
        {/* navbar component */}
        <div className="main">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/moeze-ha" component={MoezeHa} />
            <Route exact path="/khane-sorod" component={KhaneSorod} />

            {/* pages components */}
          </Switch>
        </div>
        {/* footer component */}
      </Router>
    </div>
  );
}

export default App;
