import { Html, Head, Main, NextScript } from 'next/document'
import Document from 'next/dist/pages/_document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>Marvel API</title>
        <Head>
        <meta name="theme-color" content="#F60019" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#F60019" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />

        {/* <link rel="shortcut icon" href="/favicon.png" type="image/png" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
