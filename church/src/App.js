import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoezeHa from './components/pages/MoezeHa/MoezeHa';
import KhaneSorod from './components/pages/KhaneSorod/KhaneSorod';
import KanonEShadi from './components/pages/KanonEShadi/KanonEShadi';
import Akhbar from './components/pages/Akhbar/Akhbar';
import Khanevade from './components/pages/Khanevade/Khanevade';
import Javanan from './components/pages/Javanan/Javanan';
import DarBareMa from './components/pages/DarBareMa/DarBareMa';
import FaaliatHa from './components/pages/FaaliatHa/FaaliatHa';

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
            <Route exact path="/kanon-e-shadi" component={KanonEShadi} />
            <Route exact path="/akhbar" component={Akhbar} />
            <Route exact path="/khanevade" component={Khanevade} />
            <Route exact path="/javanan" component={Javanan} />
            <Route exact path="/dar-bare-ma" component={DarBareMa} />
            <Route exact path="/faaliat-ha" component={FaaliatHa} />
            {/* pages components */}
          </Switch>
        </div>
        {/* footer component */}
      </Router>
    </div>
  );
}

export default App;
