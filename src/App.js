import './App.css';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import ttt from './assets/ttt.png'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{margin:"5rem"}}>
        <h1>mcc-blog</h1>
        <img src={ttt} style={{width:"95px", height:"95px", borderRadius:"50%"}}alt="ttt" />
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
