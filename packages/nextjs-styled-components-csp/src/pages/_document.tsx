import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Response } from 'express';

interface MockWindow {
  __webpack_nonce__?: string;
}

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const { locals } = ctx.res as Response;
    const additionalProps = { nonce: locals && locals.nonce };
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      (global.window as MockWindow) = {
        __webpack_nonce__: locals && locals.nonce
      };

      return {
        ...initialProps,
        ...additionalProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { nonce } = this.props as any;
    return (
      <Html lang='en-GB'>
        <Head nonce={nonce}>
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `window.__webpack_nonce__ = "${nonce}"`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
