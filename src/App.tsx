import React from 'react';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Form />
      </Route>
      <Route path="/app">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
