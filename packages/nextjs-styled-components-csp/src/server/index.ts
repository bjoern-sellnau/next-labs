import express, { NextFunction, Request, Response } from 'express';
import next from 'next';
import { randomBytes } from 'crypto';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const generateNonce = () => {
  return randomBytes(16).toString('base64');
};

type CSP =
  | 'child-src'
  | 'connect-src'
  | 'default-src'
  | 'font-src'
  | 'frame-src'
  | 'img-src'
  | 'manifest-src'
  | 'media-src'
  | 'object-src'
  | 'prefetch-src'
  | 'script-src'
  | 'script-src-elem'
  | 'script-src-attr'
  | 'style-src'
  | 'style-src-elem'
  | 'style-src-attr'
  | 'worker-src'
  | 'base-uri'
  | 'plugin-types'
  | 'sandbox'
  | 'form-action'
  | 'frame-ancestors'
  | 'navigate-to'
  | 'report-uri'
  | 'report-to'
  | 'block-all-mixed-content'
  | 'referrer'
  | 'require-sri-for'
  | 'require-trusted-types-for'
  | 'trusted-types'
  | 'upgrade-insecure-requests';

// Return a Content Security Policy string
const generateCSP = (nonce: string): string => {
  // Define the directives/values
  const csp: Partial<Record<CSP, string>> = {
    'default-src': `'none'`,
    'script-src-elem': `'self' 'nonce-${nonce}'`,
    'connect-src': `'self'`,
    'style-src': `'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
    //'style-src': `'self' 'nonce-${nonce}'`,
    'script-src': `'self' 'nonce-${nonce}'`,
    'font-src': `https://fonts.gstatic.com`,
    'prefetch-src': `'self'`
  };

  // Override directives outside production
  if (process.env.NODE_ENV !== 'production') {
    csp['script-src'] = `'self' 'unsafe-eval' 'nonce-${nonce}'`;
  }

  // Convert to string and return
  return Object.entries(csp).reduce(
    (acc, [key, val]) => `${acc} ${key} ${val};`,
    ''
  );
};

(async () => {
  try {
    await app.prepare();
    const server = express();

    // CSP Middleware for Express
    server.use((_req: Request, res: Response, next: NextFunction) => {
      // Generate the random token
      const nonce = generateNonce();

      // Set the CSP header
      res.setHeader('Content-Security-Policy', generateCSP(nonce));

      // Make the nonce available to Next.js
      res.locals.nonce = nonce;

      // Continue to the next middleware
      next();
    });

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: Error) => {
      if (err) throw err;
      console.log(`🚀 Ready on http://localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
