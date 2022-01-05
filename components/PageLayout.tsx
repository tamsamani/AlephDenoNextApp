import React from 'react';
import classnames from "classnames";

import Header from "@/components/Header.tsx";

const PageLayout = ({ className, children, theme,  ...props }) => { 

	console.log("da", theme, props);

	return <div className={classnames("page-layout w-full h-screen bg-red-900", className)} {...props}>
		<Header>
			Kawai Header
			<button className="btn" >Toggle Theme ({ props.theme })</button>	
		</Header>
		{children}
	</div>;
};


// the default page layout
export const DefaultPageLayout = PageLayout;

export function withLayout(Page) {
	const Layout = Page.defaultProps?.layout || DefaultPageLayout;

	console.log(Layout);

	return ({ ...pageProps }) => {
		const props = { ...Page?.defaultProps, ...pageProps};
		return <Layout {...props}>
			<Page {...props} />
		</Layout>;
	};;
};

export default PageLayout;