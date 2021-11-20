import React from 'react';
import Heading from '../components/heading';
import Page from '../components/page';
import Text from '../components/text';

const About = ({ nonce }) => {
  return (
    <Page meta={{ nonce, title: 'About' }}>
      <Heading as='h1'>About</Heading>
      <Text>
        Our about page is still in the alpha stage of development at this time,
        so we aren&apos;t quite ready to share our secrets just yet. Don&apos;t
        worry - you&apos;ll be able to pre-order and get early access to our
        closed Pre-Beta Alpha&trade; very soon!
      </Text>

      <Text>Stay random! &hearts;</Text>
    </Page>
  );
};

export default About;
