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
import { Badge } from "../ui/badge";
import { Copy, Eye, Printer, Share2, Trash2 } from "lucide-react";
import PaginationTable from "./PaginationTable";

const ArticlesTable = () => {
  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100/30">
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Opération</TableHead>
              <TableHead>N° bon</TableHead>
              <TableHead>Compte</TableHead>
              <TableHead>Libellé</TableHead>
              <TableHead>Debit</TableHead>
              <TableHead>Credit</TableHead>
              <TableHead>État</TableHead>
              <TableHead>Saisie par</TableHead>
              <TableHead>Modier par</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <TableRow>
                  <TableCell className="font-medium">
                    20/02/2025 16:50:31
                  </TableCell>
                  <TableCell>Réglement Client</TableCell>
                  <TableCell>1235689</TableCell>
                  <TableCell> Frs - Mohamed Amzi</TableCell>
                  <TableCell>
                    Chéque - BLC N° 178523 12/25/2025 - Chéq N° 123456 - Eché
                    20/02/2025
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>+2 536,00</TableCell>
                  <TableCell>
                    <Badge variant="secondary">En cours</Badge>
                  </TableCell>
                  <TableCell>Oumaima le 12/25/2025 12:58:12</TableCell>
                  <TableCell>Amine le 12/25/2025 12:58:12</TableCell>
                </TableRow>
              </ContextMenuTrigger>

              <ContextMenuContent>
                <ContextMenuItem>
                  <Eye />
                  Afficher
                </ContextMenuItem>
                <ContextMenuItem>
                  <Printer />
                  Imprimer
                </ContextMenuItem>
                <ContextMenuItem>
                  <Share2 />
                  Partager
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
