import React from 'react';
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const LargeArtPiece = (props) => {
  
  const {title, description, price, img, type} = props.art
  const {addToHomePage, homePageArt,} = props

  return (
    <>
      <Link to={'/art/' + props.art._id}>
        <h1>{title}</h1>
          <p>{description}</p>
            <p> $ {price}</p>
              <img src={img} height='400pt' width='400pt' />
                <p>type: {type}</p>
      </Link>
    </>
  );
};

export default LargeArtPiece;