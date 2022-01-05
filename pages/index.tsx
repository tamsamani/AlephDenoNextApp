import React from 'react';

async function getTitle (): Promise<{ data?: unknown, error?: unknown, type: "data" | "response", status: "success" | "error" }> {
  try {
    const response = await fetch('/api/');

    if (response.ok) {
      return {
        data: await response.json(),
        type: 'data',
        status: "success"
      }
    } else throw {error: response, type:'response'};

  } catch (error) {
    throw ({type: 'data', ...error, status: 'error'});
  }
};

const IndexPage = ({...props}) => {

  const [title, setTitle] = React.useState('Loading...');

  React.useEffect(() => {
    
    // load api message
    getTitle()
    .then((result) => setTitle(result.data.message))
    .catch(({error}) => setTitle(error.statusText || error.status));

  }, []);

  return <>
    <h3 className="text-blue-600 dark:text-red-500 font-bold text-lg text-center" >{title}</h3>
    <p className="font-light" >Hello World 2</p>
		<p className="text-xs font-bold" >Powered By Deno, Aleph & Repl.it</p>
  </>;
};

IndexPage.defaultProps = {
	// layout: PageLayout, // default Layout
	theme: "dark"
};

export default IndexPage;