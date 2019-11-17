import React, {useState} from 'react';
import {withTheme} from '../providers/ThemeProvider'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const ArtPiece = (props) => {

  const {_id} = props.match.params



    const getArt = props.artInfo.filter(art => art._id === _id)
    

  return (<>
    {getArt.map(art => {
      return (
        <ArtPieceStyle>
          <h1>{art.title}</h1>
            <p>{art.description}</p> 
              <p>$ {art.price}</p>
                <img src={art.img}  />
                  <p>type: {art.type}</p>
                  <Link to='/'>Back to Home</Link>
        </ArtPieceStyle>
        )
    })}
    </>
  );
};

const ArtPieceStyle = styled.div`
z-index: 1;
text-align: center;
margin-top: 7vh;
margin-bottom: 7vh;
  img {
    width: 75%;
    height: 75%;
  }
`;

export default withTheme(ArtPiece);