import React from 'react';
import Styled from 'styled-components'

const LargeArtPiece = (props) => {
  
  const {title, description, price, img, type} = props.art
  const {addToHomePage, homePageArt,} = props

  return (
    <>
      
      <h1>{title}</h1>
        <p>{description}</p>
        <p>test{price}</p>
        <img src={img} height='400pt' width='400pt' />
        <p>type: {type}</p>
     
      
    </>
  );
};

export default LargeArtPiece;