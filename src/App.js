import React, {useContext} from 'react';
import { withTheme } from './providers/ThemeProvider';
import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import ArtPiece from './components/ArtPiece'

const App = props => {




  return (<>
  <Nav  />
      <Switch>
        <Route exact path='/' render={rProps => <Home {...rProps} />} /> 
        <Route exact path='/about' render={rProps => <About {...rProps} />} /> 
        <Route path='/art/:_id' render={rProps => <ArtPiece {...rProps} />} />
      </Switch>
          </>);
};

export default withTheme(App);
