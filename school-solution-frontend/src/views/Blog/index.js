import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import AllBlog from './AllBlog';
import SingleBlog from './SingleBlog';

class Blog extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/blog" component={AllBlog} />
          <Route path="/blog/:id" component={SingleBlog} />
        </Switch>
      </main>
    )
  }
}

export default Blog;
