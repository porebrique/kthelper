import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { 
  Game,
  TeamEditView,
  Dashboard 
} from 'src/containers';
import App from './App';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="dashboard" />
    <Route path="dashboard" component={Dashboard} />
    <Route path="teams/:teamId/edit" component={TeamEditView} />
    <Route path="game" component={Game} />
  </Route>
);

