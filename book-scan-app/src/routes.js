import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import BookDetails from './pages/BookDetails';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/book-details/:isbn">
          <BookDetails />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
