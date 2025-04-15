import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>RootLayout</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
