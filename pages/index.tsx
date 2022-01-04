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

export default function IndexPage () {

  const [title, setTitle] = React.useState('Loading...');

  React.useEffect(() => {
    
    // load api message
    getTitle()
    .then((result) => setTitle(result.data.message))
    .catch(({error}) => setTitle(error.statusText || error.status));

  }, []);

  return <div>
    <h3>{title}</h3>
    <p>Hello</p>
  </div>;
}