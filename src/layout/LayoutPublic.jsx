import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import NavBarOffcanvas from "../components/NavBarOffcanvas/NavBarOffcanvas";

// Aqui es donde van los componentes que conforman las paginas
const LayoutPublic = () => {
  return (
    <div className="header_gradient">
      <NavBarOffcanvas />
      <div className="header_gradient-background"></div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
