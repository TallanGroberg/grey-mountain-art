import React from 'react';
import {withTheme} from '../providers/ThemeProvider'
import ArtPiece from './ArtPiece'
import LargeArtPiece from './LargeArtPiece'
import {Route, Switch, Link} from 'react-router-dom'
const SideBar = (props) => {

  const{homePageArt} = props
  
  return (
    <div className='div1'>
      
        <>
          {props.artInfo.map( art => 
          <div onMouseEnter={() =>props.addToHomePage(art)}>
            <Link key={art.title} to={'/art/' + art._id}>
              <h1>{art.title}</h1>
                <p>{art.price}</p>
                  <img src={art.img} height='100pt' width='100pt' />
                    <p>type: {art.type}</p>
            </Link> 
           </div>
            )}
        </>
      
      <Switch>
          <Route path='/art/:_id' render={rProps => <ArtPiece {...rProps} />} />
      </Switch>
    
    </div>
  );
};

export default withTheme(SideBar);