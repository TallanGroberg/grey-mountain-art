import React, {useState} from 'react';
import {withTheme} from '../providers/ThemeProvider'
import styled from 'styled-components'

const ArtPiece = (props) => {

  const {_id} = props.match.params



    const getArt = props.artInfo.filter(art => art._id === _id)
    const {title, description, price,img,type} = getArt
    

  return (<>
    {getArt.map(art => {
      return (
        <ArtPieceStyle>
          <h1>{art.title}</h1>
            <p>{art.description}</p> 
              <p>{art.price}</p>
                <img src={art.img} height='500pt' width='500pt' />
                  <p>type: {art.type}</p>
        </ArtPieceStyle>
        )
    })}
    </>
  );
};

const ArtPieceStyle = styled.div`
z-index: 1;
text-align: center;
`;

export default withTheme(ArtPiece);