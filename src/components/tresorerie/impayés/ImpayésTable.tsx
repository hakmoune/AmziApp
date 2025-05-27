import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleArrowDown, CircleArrowUp, Copy, Redo2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PaginationTable from "./PaginationTable";

const ImpayésTable = () => {
  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100/30">
            <TableRow>
              <TableHead>N°bon</TableHead>
              <TableHead>Date depot</TableHead>
              <TableHead>Date d'échéance</TableHead>
              <TableHead>N° Chéq/effet</TableHead>
              <TableHead>Compte</TableHead>
              <TableHead>Libelle</TableHead>
              <TableHead>Débit</TableHead>
              <TableHead>Credit</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Propriétaire</TableHead>
              <TableHead>Saisie par</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <TableRow>
                  <TableCell>152348</TableCell>
                  <TableCell>20/12/2024</TableCell>
                  <TableCell>20/12/2024</TableCell>
                  <TableCell>12536</TableCell>
                  <TableCell>
                    <Badge variant={"secondary"}>Societé</Badge>
                  </TableCell>
                  <TableCell>
                    Chèque impayé : N° 12536, Compte banque : societé, Raison :
                    non valide
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>1 5228,00</TableCell>
                  <TableCell>ASALAM MENARA</TableCell>
                  <TableCell>AMZI STE</TableCell>
                  <TableCell>Oiumaima le 21/23/2025 12:20:00</TableCell>
                </TableRow>
              </ContextMenuTrigger>

              <ContextMenuContent>
                <ContextMenuItem>
                  <Redo2 />
                  Relancer le client
                </ContextMenuItem>
                <ContextMenuItem>
                  <CircleArrowUp />
                  Dépôt banque
                </ContextMenuItem>
                <ContextMenuItem>
                  <CircleArrowDown />
                  Signaler comme litige
                </ContextMenuItem>
                <ContextMenuItem>
                  <Copy />
                  Copier
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}></TableCell>
              <TableCell className="text-center">0,00</TableCell>
              <TableCell className="text-center">1 5228,00</TableCell>
              <TableCell colSpan={4}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      <PaginationTable />
    </>
  );
};

export default ImpayésTable;
