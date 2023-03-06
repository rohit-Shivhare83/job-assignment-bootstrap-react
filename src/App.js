import "./App.css";
import Clients from "./components/Clients/Clients";
import Content from "./components/Content/Content";
import ContentGrid from "./components/ContentGrid/ContentGrid";
import Footer from "./components/Footer/Footer";
import FooterImg from "./components/FooterImg/FooterImg";
// import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import NavbarCotent from "./components/NavbarContent/NavbarCotent";
import NavLogo from "./components/NavLogo/NavLogo";

function App() {
  return (
    <>
      <div className="container-fluid p-0  bg-light ">
        <div className="container ">
          <NavLogo />
        </div>
        <hr className="hr m-0"></hr>
        <div className="container-fluid bg-white">
          <div className="container ">
            {/* <img className="" src="logo" alt="logo" /> */}
            <Navbar2 />
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 m-0">
        <NavbarCotent />
        <Clients />
        <Content />
        <ContentGrid />
        <FooterImg />
        <Footer />
      </div>
    </>
  );
}

export default App;
