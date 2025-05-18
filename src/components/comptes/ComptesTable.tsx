import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Copy, Eye, File, Trash2 } from "lucide-react";
import PaginationTable from "./PaginationTable";

const ComptesTable = () => {
  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100/30">
            <TableRow>
              <TableHead className="w-[100px]">Compte</TableHead>
              <TableHead>Solde</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>Ville</TableHead>
              <TableHead>Adresse</TableHead>
              <TableHead>Commercial</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <TableRow>
                  <TableCell>Mohammed AMZI</TableCell>
                  <TableCell>2 258,00</TableCell>
                  <TableCell>06 79 52 85 74</TableCell>
                  <TableCell>Casablanca</TableCell>
                  <TableCell>
                    Rue jura 177, maarif, etg 3 Appt 50, Casablanca, Maroc
                  </TableCell>
                  <TableCell>Amine LAMINE</TableCell>
                </TableRow>
              </ContextMenuTrigger>

              <ContextMenuContent>
                <ContextMenuItem>
                  <Eye />
                  Afficher
                </ContextMenuItem>
                <ContextMenuItem>
                  <File />
                  Situation
                </ContextMenuItem>
                <ContextMenuItem>
                  <Copy />
                  Copier
                </ContextMenuItem>
                <DropdownMenuSeparator />
                <ContextMenuItem>
                  <Trash2 />
                  Supprimer
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </TableBody>
        </Table>
      </div>

      <PaginationTable />
    </>
  );
};

export default ComptesTable;
