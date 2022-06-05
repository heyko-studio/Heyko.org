import { Html, Head, Main, NextScript } from 'next/document'

export default function App () {
    return (
        <Html>
            <Head />
            <title>Heyko</title>

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="white" />
            <meta property="og:site_name" content="Heyko" />
            <meta property="og:title" content="Heyko" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Heyko is an independent video game creation team" />
            <meta property="og:url" content="%PUBLIC_URL%" />
            <meta content="/img/Five_Mysteries_Banner_1.webp" property="og:image" />
            <meta name="description" content="Heyko is an independent video game creation team" />
            <link rel="icon" href="/favicon.ico" />

            <body>
                <Main />
                <NextScript />
                <div id="popup"></div>
            </body>
        </Html>
    )
}