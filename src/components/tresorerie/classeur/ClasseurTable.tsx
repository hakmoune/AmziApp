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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleArrowDown, CircleArrowUp, Copy } from "lucide-react";
import PaginationTable from "./PaginationTable";
import { Badge } from "@/components/ui/badge";

const ClasseurTable = () => {
  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100/30">
            <TableRow>
              <TableHead>Date d'échéance</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>N° Chéq/effet</TableHead>
              <TableHead>Banque</TableHead>
              <TableHead>Compte</TableHead>
              <TableHead>Propriétaire</TableHead>
              <TableHead>N° B.L</TableHead>
              <TableHead>N° Facture</TableHead>
              <TableHead>Libelle</TableHead>
              <TableHead>Date d'opération</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <TableRow>
                  <TableCell>20/12/2024</TableCell>
                  <TableCell>2 258,00</TableCell>
                  <TableCell>
                    <Badge variant={"secondary"}>Chéque</Badge>
                  </TableCell>
                  <TableCell>12536</TableCell>
                  <TableCell>BP </TableCell>
                  <TableCell>AMZI STE</TableCell>
                  <TableCell>ASALAM MENARA</TableCell>
                  <TableCell>125878</TableCell>
                  <TableCell>369865</TableCell>
                  <TableCell>
                    Chèque : Paiement Client N°Chèq 2203902785 Echéance
                    29/06/2022
                  </TableCell>
                  <TableCell>12/25/2025</TableCell>
                </TableRow>
              </ContextMenuTrigger>

              <ContextMenuContent>
                <ContextMenuItem>
                  <CircleArrowDown />
                  Dépôt banque
                </ContextMenuItem>
                <ContextMenuItem>
                  <CircleArrowUp />
                  Paiement fournisseur
                </ContextMenuItem>
                <ContextMenuItem>
                  <Copy />
                  Copier
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

export default ClasseurTable;
