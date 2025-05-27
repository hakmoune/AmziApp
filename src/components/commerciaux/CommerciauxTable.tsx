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
import { Copy, Eye, File, Printer, Share2, Trash2 } from "lucide-react";
import PaginationTable from "./PaginationTable";

const CommerciauxTable = () => {
  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100/30">
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Prénom</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Ville</TableHead>
              <TableHead>Nombre des clients</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <TableRow>
                  <TableCell>El Mahdi</TableCell>
                  <TableCell>HAKMOUNE</TableCell>
                  <TableCell>06 79 85 75 20</TableCell>
                  <TableCell>mehdi.hakmoune@gmail.com</TableCell>
                  <TableCell> Casablanca</TableCell>
                  <TableCell>23</TableCell>
                </TableRow>
              </ContextMenuTrigger>

              <ContextMenuContent>
                <ContextMenuItem>
                  <Eye />
                  List clients
                </ContextMenuItem>
                <ContextMenuItem>
                  <File />
                  Situation
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

export default CommerciauxTable;
