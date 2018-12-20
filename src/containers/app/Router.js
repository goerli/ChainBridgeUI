import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../about';
import Blog from '../blog';
import RoadMap from '../roadmap';
import Bridge from '../bridge';

const RouterObj = () => (
  <main>
    <Switch>
      <Route exact path="/" component={RoadMap} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/roadmap" component={RoadMap} />
      <Route path="/bridge" component={Bridge} />
    </Switch>
  </main>
);

export default RouterObj;
