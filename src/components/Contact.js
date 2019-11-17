import React from 'react';
import styled from 'styled-components'


const Contact = (props) => {
  return (
    <ContactStyle>
      <h1>Contact</h1>
        <h4>email: </h4>
          <h4>Phone: 801-682-2655</h4>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
text-align: center;
margin: 7vh;
`

export default Contact;