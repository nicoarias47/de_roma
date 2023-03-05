import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBarOffcanvas from "../components/NavBarOffcanvas/NavBarOffcanvas";
import WppButton from "../components/WppButton/WppButton";
import ScrollTop from "../components/ScrollTop";

const LayoutPublic = () => {
  return (
    <div className="header_gradient">
      <NavBarOffcanvas />
      <ScrollTop/>
      <div className="header_gradient-background"></div>
      <main>
        <WppButton />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
