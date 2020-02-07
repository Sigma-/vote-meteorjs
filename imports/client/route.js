import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';
import MainLayout from './layouts/MainLayout';
import About from '../pages/About';

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <div>
        <MainLayout />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>,
    document.getElementById('render-target')
  );
});
