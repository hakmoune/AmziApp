import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { addDays, format } from "date-fns";
import { CalendarIcon, Copy, Eye, Printer, Share2, Trash2 } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Badge } from "@/components/ui/badge";

import MultiSelect from "./Multi";
import { ComboboxDemo } from "./SearchClient";

const Journal = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Journal.</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[250px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>

                <Input
                  type="text"
                  placeholder="Recherech..."
                  className="w-[250px]"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline">
                <Printer /> Imprimer
              </Button>

              <Button variant="outline">
                <Share2 /> Partager
              </Button>
            </div>
          </div>

          <div className="flex gap-4">
            <MultiSelect />
            <ComboboxDemo />
            <ComboboxDemo />
            <MultiSelect />
          </div>

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
                        Chéque - BLC N° 178523 12/25/2025 - Chéq N° 123456 -
                        Eché 20/02/2025
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
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>
    </>
  );
};

export default Journal;
