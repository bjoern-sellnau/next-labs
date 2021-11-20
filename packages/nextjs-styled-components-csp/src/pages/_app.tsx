import React from 'react';
import type { AppProps } from 'next/app';
import ThemeProvider from '../contexts/theme';
import '../libs/fontawesome';

type ExtendedAppProps = AppProps & {
  nonce: string;
};

const MyApp = ({ Component, pageProps, nonce }: ExtendedAppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} nonce={nonce} />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = ({ ctx }) => {
  const { locals } = ctx.res;
  return { nonce: locals && locals.nonce };
};

export default MyApp;
