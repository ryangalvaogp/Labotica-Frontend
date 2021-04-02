import Document, { Html, Head, Main, NextScript } from "next/document"
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script src="/js/smoothScroll.js" />
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ryangalvaogp/Code@master/css/Home.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                    <script src="/js/navbarOntop.js" />
                    <script src="/js/animateIn.js" />
                </Head>
                <body style={{height:'auto'}}>
                    <Main />
                    <NextScript />
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                        crossOrigin="anonymous" />
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
                        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
                        crossOrigin="anonymous" />
                </body>
            </Html>
        )
    }
}