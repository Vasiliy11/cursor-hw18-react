import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './navigation.scss';

import Contacts from '../contacts/Contacts';
import Home from '../home/Home';
import Gallery from '../gallery/Gallery';
import Posts from '../posts/Posts';

export const Navigation = () => {
  return (
    <div className="nav">
      <Router>
        <ul>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link to="/contacts" className="nav-link">
            Contacts
          </Link>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
};
