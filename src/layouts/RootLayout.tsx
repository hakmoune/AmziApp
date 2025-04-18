import { Outlet } from "react-router-dom";
import {
  UserRound,
  Bell,
  Landmark,
  Box,
  Album,
  Briefcase,
  BriefcaseBusiness,
  ClipboardPen,
  Users,
  BookText,
} from "lucide-react";

const RootLayout = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-200 shadow-xs">
        <div>
          <a href="/" className="font-bold flex items-center gap-1">
            <Album />
            Alpha App.
          </a>
        </div>

        <ul className="flex gap-5 text-sm">
          <li>
            <a href="/journal" className="active flex items-center gap-1">
              <BookText />
              Journal
            </a>
          </li>
          <li>
            <a href="/comptes" className="flex items-center gap-1">
              <UserRound />
              Comptes
            </a>
          </li>
          <li>
            <a href="/articles" className="flex items-center gap-1">
              <Box />
              Articles
            </a>
          </li>
          <li>
            <a href="/operation-client" className="flex items-center gap-1">
              <BriefcaseBusiness />
              Opér Client
            </a>
          </li>
          <li>
            <a
              href="/operation-fournisseur"
              className="flex items-center gap-1"
            >
              <Briefcase />
              Opér Fournisseur
            </a>
          </li>
          <li>
            <a href="/tresorerie" className="flex items-center gap-1">
              <Landmark />
              Trésorerie
            </a>
          </li>
          <li>
            <a href="/frais" className="flex items-center gap-1">
              <ClipboardPen />
              Frais
            </a>
          </li>
          <li>
            <a href="/commerciaux" className="flex items-center gap-1">
              <Users />
              Commerciaux
            </a>
          </li>
        </ul>

        <div className="relative flex items-center gap-4">
          <a href="">
            <span className="absolute top-0 left-2 flex items-center justify-center text-white text-xs font-bold bg-red-500 rounded-full w-4 h-4">
              4
            </span>
            <Bell className="w-5 h-5 text-gray-700" />
          </a>
          <div className="flex items-center gap-1.5">
            <img className="w-8 h-8" src="women-avatar.png" alt="User Avatar" />
            <p className="text-sm font-bold">A.Oumaima</p>
          </div>
        </div>
      </nav>

      <main className="px-8 py-3 bg-gray-100/30">
        <div className="bg-white border border-gray-200 rounded-sm shadow-xs min-h-[84vh]">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
