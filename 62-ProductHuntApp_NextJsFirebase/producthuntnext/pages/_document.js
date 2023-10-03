import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='es'>
      {/* <Head /> */}
      <Head>
        <html lang='es' />
        {/* Normalize */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
        {/* custom css */}
        <link href='/static/css/app.css' rel={'stylesheet'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}