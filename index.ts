import React, { FC } from "react";

type AppProps = { Page: FC; pageProps: Record<string, unknown> };

console.log("App Start:");

export default function App({ Page, pageProps }: AppProps) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
    </main>
  );
}
