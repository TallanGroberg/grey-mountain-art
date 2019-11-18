import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutStyle>
      <h1>Hello my name is Jason Scott, an artist, inventor and public speaker from Salt Lake City, I have a passion for creating Beautiful and unique art from my skills as a caftsman. </h1>
      <Link to='forsell'>checkout some of the pieces I have for sale</Link>
    </AboutStyle>
  );
};

const AboutStyle = styled.div`
text-align: center;
margin: 7vh;
`

export default About;