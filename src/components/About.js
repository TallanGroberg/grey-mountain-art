import React from 'react';
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h1>Hello my name is Jason Scott, an artist, inventor and public speaker from Salt Lake City, </h1>
        <p>checkout some of my </p>
        <Link to='forsell'>fine art for sale</Link>
    </div>
  );
};

export default About;