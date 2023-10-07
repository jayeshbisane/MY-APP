import "./Home.css"
import Navbar from"./../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import xyz from "./../../pexels-kirandeep-singh-walia-11799670.jpg";
export default function Home()
{
   return (
      <div className="home-container">
        <Navbar/>
        <img src={xyz} className="india-tourism"/>
        <h1 className="text">India tourism</h1>
        <p className="text">Attarction of world </p>
        <Footer />
      </div>

     
 )



}