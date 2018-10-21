import * as React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Event from './components/Event';

export default () => (
  <React.Fragment>
    <Route path={'/'} component={App} />
    <Route path={'/event'} component={Event} />
  </React.Fragment>
);
