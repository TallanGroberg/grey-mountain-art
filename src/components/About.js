import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutStyle>
      <h1>Hello my name is Jason Scott, an artist, inventor and public speaker from Salt Lake City, </h1>
        <p>checkout some of my</p>
          <Link to='forsell'>fine art for sale</Link>
    </AboutStyle>
  );
};

const AboutStyle = styled.div`
text-align: center;
margin: 7vh;
`

export default About;