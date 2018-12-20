import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../about';
import Blog from '../blog';
import RoadMap from '../roadmap';

const RouterObj = () => (
  <main>
    <Switch>
      <Route exact path="/" component={RoadMap} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/roadmap" component={RoadMap} />
    </Switch>
  </main>
);

export default RouterObj;
