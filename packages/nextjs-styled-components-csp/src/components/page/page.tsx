import React from 'react';
import Head from '../head';
import { HeadProps } from '../head/head';
import Header from '../header';
import Styles from './page.styles';

interface PageProps {
  meta: HeadProps;
  children: React.ReactNode;
}

const Page = ({ meta, children }: PageProps) => {
  return (
    <>
      <Head {...meta} />
      <Header />
      <Styles.Main>
        <Styles.Wrapper>{children}</Styles.Wrapper>
      </Styles.Main>
    </>
  );
};

export default Page;
