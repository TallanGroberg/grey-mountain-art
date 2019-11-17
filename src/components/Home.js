import React from 'react';
import SideBar from './SideBar'
import LargeArtPiece from './LargeArtPiece'
import {withTheme} from '../providers/ThemeProvider'


const Home = (props) => {
 

  const {homePageArt, addToHomePage, artInfo} = props
 
  return (<>
      <SideBar  />
    <div className='div2'>
      {homePageArt.length === 0 ? null : homePageArt.map( art => <LargeArtPiece art={art} />) }
    </div>
    </>
  );
};

export default withTheme(Home);