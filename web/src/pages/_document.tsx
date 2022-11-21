import { Favicon } from 'components/Head/Favicon'
import { Seo } from 'components/Head/Seo'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '../styles/stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymout"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />

          <Favicon />

          <Seo
            title="NG CA$H Challenge"
            url="https://ng-cash-challenge.vercel.app"
            description="Crie sua carteira digital com a cara da nova geração!"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
