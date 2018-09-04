import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { 
  TeamEditView,
  Dashboard 
} from 'src/containers';
import App from './App';

const routesConfig = {
  dashboard: {
    path: 'dashboard',
    component: Dashboard,
    pageTitle: 'Dashboard'
  },
  teamEditView: {
    path: 'teams/:teamId/edit',
    component: TeamEditView,
    pageTitle: 'Edit team'
  }  
}

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="dashboard" />
    <Route {...routesConfig.dashboard} />
    <Route {...routesConfig.teamEditView} />
  </Route>
);

