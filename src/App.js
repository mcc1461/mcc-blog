import './App.css';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
    
  },
  {
    path: "about",
    element: <div>About</div>,
  },

]);


function App() {
  return <RouterProvider router={router} />
}

export default App;
