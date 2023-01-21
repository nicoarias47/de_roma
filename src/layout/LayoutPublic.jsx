import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const LayoutPublic = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;
