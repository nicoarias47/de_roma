import { Outlet } from "react-router-dom";
// import CircleInFooter from "../components/CircleInFooter/CircleInFooter";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

// Aqui es donde van los componentes que conforman las paginas
const LayoutPublic = () => {
  return (
    <div>
      <NavBar />
      <main>
        {/* Este componente renderiza varios componentes a la vez */}
        {/* <CircleInFooter /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
