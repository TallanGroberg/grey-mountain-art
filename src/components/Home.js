import React from 'react';
import styled from 'styled-components'

import SideBar from './SideBar'
import LargeArtPiece from './LargeArtPiece'
import {withTheme} from '../providers/ThemeProvider'


const Home = (props) => {
 

  const {homePageArt, addToHomePage, artInfo} = props
 
  return (<HomeStyle>
      <SideBar  />
    <div className='div2'>
      {homePageArt.length === 0 ? null : homePageArt.map( art => <LargeArtPiece art={art} />) }
    </div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
    height: 99vh;
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    font-family: Belleza, sans-serif;
    text-align: center;
    

  .div1 { 
        grid-area: 1 / 1 / 5 / 2; 
        
        padding: 3pt;
        text-align: center;
        overflow-y:auto 
  }
  .div2 { 
        grid-area: 1 / 2 / 5 / 5; 
  }
  
    @media only screen and (max-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;

      .div1 {
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

export default withTheme(Home);