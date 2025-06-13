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

const ArticlesTable = () => {
  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100/30">
            <TableRow>
              <TableHead>Code article</TableHead>
              <TableHead>Désignation</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Unité</TableHead>
              <TableHead>Prix achat</TableHead>
              <TableHead>Prix vente A</TableHead>
              <TableHead>Prix vente B</TableHead>
              <TableHead>Prix vente C</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <TableRow>
                  <TableCell>Connecteur en aliance de linge</TableCell>
                  <TableCell>Connecteur en aliance de linge</TableCell>
                  <TableCell>1055</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>12.00</TableCell>
                  <TableCell>17.00</TableCell>
                  <TableCell>19.00</TableCell>
                  <TableCell>21.00</TableCell>
                </TableRow>
              </ContextMenuTrigger>

              <ContextMenuContent>
                <ContextMenuItem>
                  <Eye />
                  Afficher
                </ContextMenuItem>
                <ContextMenuItem>
                  <File />
                  Fiche
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

export default ArticlesTable;
