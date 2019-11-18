import React from 'react';
import styled from 'styled-components'
import {withTheme} from '../providers/ThemeProvider'
import {Link} from 'react-router-dom'

const ForSell = (props) => {

  const Sellables = props.artInfo.filter( theArt => typeof(theArt.price) !== 'string')

  

  return (
    <ForSellStyle>
      <h1>these are all my pieces, if you want to buy a piece please go to the contact page, let me know which piece you are interested in. </h1>
        {Sellables.map(art => {
            return (

              <div>
              <Link to={'/art/' + art._id}>
                <h1>{art.title}</h1>
                  <p>{art.description}</p> 
                    <p>$ {art.price}</p>
                      <img src={art.img}  />
                        <p>type: {art.type}</p>
              </Link>
                      <Link to='/'>Back to Home</Link>
          </div>
          )
        })}
    </ForSellStyle>
  );
};

const ForSellStyle = styled.div`
  text-align: center;
 
  div {
    margin-top: 5vh;
  box-shadow: 0px 3px 31px -19px rgba(0,0,0,0.75);
  }
  img {
    width: 80%;
    height: 65%;
  }

  @media only screen and (min-width: 1000px) {
  img {
    width: 75%;
    height: 80%;
    }
  }
`

export default withTheme(ForSell);