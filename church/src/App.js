import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoezeHa from './client/containers/MoezeHa/MoezeHa';
import KhaneSorod from './client/containers/KhaneSorod/KhaneSorod';
import KanonEShadi from './client/containers/KanonEShadi/KanonEShadi';
import Akhbar from './client/containers/Akhbar/Akhbar';
import Khanevade from './client/containers/Khanevade/Khanevade';
import Javanan from './client/containers/Javanan/Javanan';
import DarBareMa from './client/containers/DarBareMa/DarBareMa';
import FaaliatHa from './client/containers/FaaliatHa/FaaliatHa';
import Header from './client/components/header/Header';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
