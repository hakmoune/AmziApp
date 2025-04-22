import { Link, Outlet } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  ChevronRight,
} from "lucide-react";

const RootLayout = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-3 border-b border-gray-200 shadow-xs">
        <div>
          <Link to="/" className="font-bold flex items-center gap-1">
            <Album />
            Alpha/App.
          </Link>
        </div>

        <ul className="flex gap-0.5 text-sm ">
          <li className="hover:bg-gray-100 p-2 rounded-xl active">
            <Link to="/journal" className="active flex items-center gap-1">
              <BookText className="w-5" />
              Journal
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-xl">
            <Link to="/comptes" className="flex items-center gap-1">
              <UserRound className="w-5" />
              Comptes
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-xl">
            <Link to="/articles" className="flex items-center gap-1">
              <Box className="w-5" />
              Articles
            </Link>
          </li>
          <li className="relative group hover:bg-gray-100 p-2 rounded-xl">
            <div className="flex items-center gap-1 cursor-pointer">
              <BriefcaseBusiness className="w-5" />
              Opération Client
              <ChevronRight className="w-4" />
            </div>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white border rounded-md shadow-lg z-10">
              <li className="border-b">
                <Link
                  to="/operation-client"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Devis
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Bon de Commande
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Bon de livraison
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Facture
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Retour
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Réglement
                </Link>
              </li>
              <li>
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Impayé
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group hover:bg-gray-100 p-2 rounded-xl">
            <div className="flex items-center gap-1 cursor-pointer">
              <Briefcase className="w-5" />
              Opération Fournisseur
              <ChevronRight className="w-4" />
            </div>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white border rounded-md shadow-lg z-10">
              <li className="border-b">
                <Link
                  to="/operation-client"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Devis
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Bon de Commande
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Bon de livraison
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Facture
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Retour
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Réglement
                </Link>
              </li>
              <li>
                <Link
                  to="/operation-fournisseur"
                  className="block px-4 py-1.5 hover:bg-gray-100"
                >
                  Impayé
                </Link>
              </li>
            </ul>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-xl">
            <Link to="/tresorerie" className="flex items-center gap-1">
              <Landmark className="w-5" />
              Trésorerie
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-xl">
            <Link to="/frais" className="flex items-center gap-1">
              <ClipboardPen className="w-5" />
              Frais
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-xl">
            <Link to="/commerciaux" className="flex items-center gap-1">
              <Users className="w-5" />
              Commerciaux
            </Link>
          </li>
        </ul>

        <div className="relative flex items-center gap-4">
          <Link to="">
            <span className="absolute top-0 left-2 flex items-center justify-center text-white text-xs font-bold bg-red-500 rounded-full w-4 h-4">
              4
            </span>
            <Bell className="w-5 h-5 text-gray-700" />
          </Link>
          <div className="flex items-center gap-1.5">
            <Avatar>
              <AvatarImage src="women-avatar.png" alt="User avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p className="text-sm font-bold">A.Oumaima</p>
          </div>
        </div>
      </nav>

      <main className="px-8 py-3 bg-gray-100/30 min-h-[82vh]">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
