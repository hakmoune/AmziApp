import { Outlet } from "react-router-dom";

import Logo from "./Logo";
import Menu from "./Menu";
import Profile from "./Profile";
import Notification from "./Notification";

const RootLayout = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-3 border-b border-gray-200 shadow-xs">
        <Logo />
        <Menu />

        <div className="relative flex items-center gap-4">
          <Notification />
          <Profile />
        </div>
      </nav>

      <main className="px-4 py-4 bg-gray-100/30 min-h-[82vh]">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
