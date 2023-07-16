import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Page from './Page';
import Error from './components/error/Error';

const App = () => {
  const router = createBrowserRouter([
    {
		path: "/",
		element: <Page/>,
		errorElement: <Error/>
    }
  ])
  
	return (
		<RouterProvider router={router}></RouterProvider>
	);
};

export default App;