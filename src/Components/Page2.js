import '../App.css';
import Navbar from './Navbar';
import Main from './Main';
import BigScreen from './BigScreen';
import BrowseTrailer from './BrowseTrailer';
import SeriesCol from './SeriesCol';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <BigScreen />
      <Routes>
        <Route path="/detail" />
      </Routes>
      <BrowseTrailer />
      <SeriesCol />
      <Footer />
    </div>
  );
};

export default Page2;
