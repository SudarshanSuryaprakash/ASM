import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'

import './css/App.css'

const App = () => {
  return (
    <div className = 'bg'>
        <div className='ui container'>
      <Router history = {history}>
        <div>
          <Header />
          <Switch>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/:id' exact component={StreamShow} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          </Switch>
        </div>
      </Router>
    </div>
    </div>

  );
};

export default App;

//229398884074-2bdsqfhknu673vb2ju9v14j53md5qpao.apps.googleusercontent.com