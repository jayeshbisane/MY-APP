import ReactDom from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./view/Home/Home";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";



const router =createBrowserRouter([
{
  path:'/',
  element:<Home />
},
{
  path:'/about',
  element:<About />

},
{
   path:'/contact',
  element:<Contact />

}


]);

const root = ReactDom.createRoot(document.getElementById('root')) 

/*unction App()
{
  const path = window.location.pathname;


  if(path === "/")
  {
    return<Home />;

  }
  else if(path ==="/about")
  {
    return <About />;
  }
  else if(path ==="/contact")
 {
  return  <Contact /> ;
 }
 else
 {
  return <h1>404</h1>;
}
}*/
  

root.render(
<>
  <RouterProvider router={router} />
</>
 
);

