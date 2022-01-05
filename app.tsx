import React, { FC, StrictMode } from "react";

import { withLayout } from "@/components/PageLayout.tsx";

// import "@/styles/index.css";


type PageProps = {
	title?: string;
	description?: string;
};

type AppProps = { 
	Page: FC; 
	pageProps: PageProps & Record<string, unknown>;
};

const pageDefaultProps = {
	title:  "Aleph Demo App",
	description: "Create A Demo App with Deno, Aleph and Taimwindcss",
	theme: "light"
};

export default function App({ Page,	pageProps }: AppProps) {

	const finalPageProps = React.useMemo(() => Object.assign(pageProps || {}, pageDefaultProps, Page.defaultProps, pageProps), []);
	const PageLayout = React.useMemo(() => withLayout(Page), []);

  return (
		<StrictMode>
			<main className={finalPageProps.theme} >
				<head>
					<meta name="viewport" content="width=device-width" />
					<title>{finalPageProps.title}</title>
					<meta name="description" content={finalPageProps.description} />
				</head>
				<PageLayout {...finalPageProps} />
			</main>
		</StrictMode>
  );
}

