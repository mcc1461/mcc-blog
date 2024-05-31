import './App.css';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import ttt4 from './assets/ttt4.png'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{margin:"5rem"}}>
        <h1>Hello World</h1>
        <img src={ttt4} style={{width:"95px", height:"95px", borderRadius:"50%"}}alt="ttt" />
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
