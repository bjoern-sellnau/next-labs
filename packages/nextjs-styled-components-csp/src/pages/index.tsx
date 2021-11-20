import React, { useState } from 'react';
import Button from '../components/button';
import Container from '../components/container';
import Heading from '../components/heading';
import Page from '../components/page';
import Text from '../components/text';

const Index = ({ nonce }) => {
  const [number, setNumber] = useState<number | null>(null);

  // Return a (new) random number between 1 and 10
  const randomNumber = () => {
    let newNum = number;
    while (newNum === number) newNum = Math.floor(Math.random() * 10) + 1;
    setNumber(newNum);
  };

  return (
    <Page meta={{ nonce, title: 'Home' }}>
      <Container>
        <Heading as='h1'>Home</Heading>
        <Text>
          Welcome to the one and only random number generation site! After six
          years in alpha, we&apos;re finally ready to announce our beta version,
          which can now return more numbers than ever before! We can&apos;t wait
          for you to try it.
        </Text>
      </Container>

      <Container>
        <Button onClick={randomNumber}>Random number</Button>
        {number && <Text>Your random number is: {number}!</Text>}
      </Container>
    </Page>
  );
};

export default Index;
