import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default function mDocument() {
  const handleAwscScriptLoad = () => {};

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="洞窝" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="//g.alicdn.com/AWSC/AWSC/awsc.js"
          async
          onLoad={handleAwscScriptLoad}
        ></script>
      </body>
    </Html>
  );
}
mDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);

  return initialProps;
};
