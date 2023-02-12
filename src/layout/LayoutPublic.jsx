import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import NavBarOffcanvas from "../components/NavBarOffcanvas/NavBarOffcanvas";

// Aqui es donde van los componentes que conforman las paginas
const LayoutPublic = () => {
  return (
    <div>
      <NavBarOffcanvas />
      <main className="header_gradient">
        <div className="header_gradient-background"></div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
