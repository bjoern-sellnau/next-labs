import React from 'react';
import NextHead from 'next/head';

export interface HeadProps {
  nonce: string;
  title: string;
}

const Head = ({ nonce, title }: HeadProps) => {
  console.log(nonce);
  return (
    <NextHead>
      <title>{`${title} - RandomNumbers`}</title>
      <link nonce={nonce} rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        nonce={nonce}
        href='https://fonts.googleapis.com/css2?family=Lexend:wght@300;500&display=swap'
        rel='stylesheet'
      />
    </NextHead>
  );
};

export default Head;
