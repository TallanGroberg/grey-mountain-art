import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const LargeArtPiece = (props) => {
  
  const {title, description, price, img, type} = props.art
  const {addToHomePage, homePageArt,} = props

  return (
    <LargeArtPieceStyle>
      <Link to={'/art/' + props.art._id}>
        <h1>{title}</h1>
          <p>{description}</p>
            <p> $ {price}</p>
              <img src={img}  />
                <p>type: {type}</p>
      </Link>
    </LargeArtPieceStyle>
  );
};

const LargeArtPieceStyle = styled.div`
  img {
    width: 90%;
    height: 90vh;
  }
`

export default LargeArtPiece;