import { Outlet } from "react-router-dom";

import Logo from "./Logo";
import Menu from "./Menu";
import Profile from "./Profile";
import Notification from "./Notification";

const RootLayout = () => {
  return (
    <>
      <header className="flex justify-between items-center px-8 py-3 border-b border-gray-200 shadow-xs">
        <Logo aria-label="Logo" />

        <nav aria-label="Menu de navigation">
          <Menu />
        </nav>

        <div className="relative flex items-center gap-4">
          <Notification aria-label="Notifications" />
          <Profile aria-label="Profil utilisateur" />
        </div>
      </header>

      <main className="px-4 py-4 bg-gray-100/30 min-h-[82vh]" role="main">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
