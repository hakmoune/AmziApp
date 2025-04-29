import { Link, useLocation } from "react-router-dom";
import {
  BookText,
  Box,
  Briefcase,
  BriefcaseBusiness,
  ChevronRight,
  ClipboardPen,
  Landmark,
  UserRound,
  Users,
} from "lucide-react";

const items = [
  { label: "Journal", icon: BookText, basePath: "journal" },
  { label: "Comptes", icon: UserRound, basePath: "comptes" },
  { label: "Articles", icon: Box, basePath: "articles" },
  {
    label: "Opération Client",
    icon: BriefcaseBusiness,
    basePath: "opération-client",
    subItems: [
      "Devis",
      "Bon de Commande",
      "Bon de livraison",
      "Facture",
      "Retour",
      "Réglement",
      "Impayé",
    ],
  },
  {
    label: "Opération Fournisseur",
    icon: Briefcase,
    basePath: "opération-fournisseur",
    subItems: [
      "Bon de Commande",
      "Bon de livraison",
      "Facture",
      "Retour",
      "Réglement",
      "Impayé",
    ],
  },
  { label: "Trésorerie", icon: Landmark, basePath: "trésorerie" },
  { label: "Frais", icon: ClipboardPen, basePath: "frais" },
  { label: "Commerciaux", icon: Users, basePath: "commerciaux" },
];

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul className="flex gap-2 text-sm">
      {items.map(({ label, icon: Icon, subItems, basePath }) => {
        const isActive = currentPath.startsWith(`/${basePath}`);

        return (
          <li
            key={label}
            className={`p-2 rounded-xl hover:bg-gray-100 ${
              isActive ? "active" : ""
            } ${subItems ? "relative group" : ""}`}
          >
            {subItems ? (
              <>
                {/* Menu avec sous-items */}
                <div className="flex items-center gap-1 cursor-pointer">
                  <Icon className="w-5" />
                  {label}
                  <ChevronRight className="w-4" />
                </div>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white border rounded-md shadow-lg z-10">
                  {subItems.map((subItem) => {
                    const subPath = `/${basePath}/${subItem
                      .toLowerCase()
                      .replaceAll(" ", "-")}`;
                    const isSubActive = currentPath === subPath;

                    return (
                      <li key={subItem} className="border-b last:border-none">
                        <Link
                          to={subPath}
                          className={`block px-4 py-1.5 hover:bg-gray-100 ${
                            isSubActive ? "active" : ""
                          }`}
                        >
                          {subItem}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              /* Menu simple */
              <Link to={`/${basePath}`} className="flex items-center gap-1">
                <Icon className="w-5" />
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
