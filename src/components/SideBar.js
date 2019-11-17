import React from 'react';
import {withTheme} from '../providers/ThemeProvider'
import ArtPiece from './ArtPiece'
import LargeArtPiece from './LargeArtPiece'
import {Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'
const SideBar = (props) => {

  const{homePageArt} = props
  
  return (
    <div className='div1'>
      
        <>
          {props.artInfo.map( art => 
          <SideBarStyle onMouseEnter={() =>props.addToHomePage(art)}>
            <Link key={art.title} to={'/art/' + art._id}>
              <h1>{art.title}</h1>
                <p>{art.price}</p>
                  <img src={art.img} height='100pt' width='100pt' />
                    <p>type: {art.type}</p>
            </Link> 
           </SideBarStyle>
            )}
        </>
      
      <Switch>
          <Route path='/art/:_id' render={rProps => <ArtPiece {...rProps} />} />
      </Switch>
    
    </div>
  );
};

const SideBarStyle = styled.div`
box-shadow: 0px 3px 31px -19px rgba(0,0,0,0.75);
`

export default withTheme(SideBar);