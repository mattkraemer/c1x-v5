import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" class="text-gray-800 antialiased" style={{background: "#0e131f"}}>
        <Head>
          <title>c1x.dev - Freelance Web Developer - Frontend Development - Web Development</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Freelance Web Developer crafting high-quality Web Applications, Websites, User Interfaces and more." />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d3748" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#2d3748" />
        </Head>
        <body>
          <Main />
          <NextScript crossOrigin="anonymous"/>
        </body>
      </Html>
    )
  }
}

export default MyDocument