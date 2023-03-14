import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stores from './components/pages/Stores';
import Home from './components/pages/Home';
import OGC from './components/pages/OGC';
import NFTsnapback from './components/pages/NFTsnapback';
import HOB from './components/pages/HOB';
import Members from './components/pages/Members';
import CA from './components/pages/CA';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/stores' exact component={Stores} />
        <Route path='/ogc' exact component={OGC} />
        <Route path='/nftsnapback' exact component={NFTsnapback} />
        <Route path='/members' exact component={Members} />
        <Route path='/hob' exact component={HOB} />
        <Route path='/CA' exact component={CA} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
