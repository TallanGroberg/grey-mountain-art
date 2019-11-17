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
    <Container>
      <Switch>
        <Route exact path='/' render={rProps => <Home {...rProps} />} /> 
        <Route exact path='/about' render={rProps => <About {...rProps} />} /> 
        <Route path='/art/:_id' render={rProps => <ArtPiece {...rProps} />} />
      </Switch>
    </Container>
          </>);
};

const Container = styled.div`
    height: 99vh;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    a {
      text-decoration: none;
      color: black;
      transition: 0.3s
    }
    a:hover {
      color: #2F4F4F;
    }

    font-family: Belleza, sans-serif;
    text-align: center;
    
    
    
  .div1 { 
    grid-area: 1 / 1 / 5 / 2; 
        /* this is for dev only */
        border: 1px solid black;
        padding: 3pt;
        text-align: center;
        overflow-y:auto 
  }
  .div2 { 
        grid-area: 1 / 2 / 5 / 5; 
        /* this is for dev only */
        border: 1px solid black;
  }
  
    @media only screen and (max-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;

      .div1 {
        /* this is for dev only */
        border: 1px solid black;
        margin-bottom: 5vh;
        width: 100%;
        }
      .div2 {
        margin-bottom: 5vh;
        display: none
        }
    }

    @media only screen and (min-width: 1000px) {
      
      .div1 {
        margin-top: 5vh;
      }
      .div2 {
        margin-top: 5vh;
      }
    }


`

export default withTheme(App);
