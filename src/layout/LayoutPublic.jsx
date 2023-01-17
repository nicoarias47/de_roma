import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;
