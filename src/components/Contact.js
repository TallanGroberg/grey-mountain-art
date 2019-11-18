import React from 'react';
import styled from 'styled-components'


const Contact = (props) => {
  return (
    <ContactStyle>
      <h1>Contact</h1>
        <h4>email: </h4>
          <h4>Phone: 801-682-2655</h4>
            <p>Feel free to leave a message if I don't answer and I will get back to you as soon as I can.</p>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
text-align: center;
margin: 7vh;
`

export default Contact;