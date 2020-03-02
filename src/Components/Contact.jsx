import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem 1.5rem;
  background: #393e46;
`;

const Heading = styled.h2`
  font-size: 1.7rem;
  padding-bottom: 3.6rem;
  color: #f2f2f2;
  font-weight: 700;
`;

const ContactForm = styled.form`
  padding: 2rem 1.3rem;
  background: #222831;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  background: #f2f2f2;
  padding: 1rem;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

const Message = styled.textarea`
  width: 100%;
  height: 240px;
  resize: none;
  background: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  padding: 1rem;
`;

const Submit = styled.button`
  border: none;
  background: #f2f2f2;
  margin-top: 2rem;
  padding: 1rem 4rem;
  width: 100%;
  font-size: 1.3rem;
  border-radius: 25px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Container>
      <Heading>Contact Me</Heading>
      <ContactForm>
        <Input type='text' name='name' placeholder='Name' />
        <Input type='text' name='email' placeholder='Email' />
        <Message name='message' placeholder='Message'></Message>
        <Submit type='submit'>Say Hi</Submit>
      </ContactForm>
    </Container>
  );
};

export default Contact;
