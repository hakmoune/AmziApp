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
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

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
          {/* <CardDescription>Hello Word!</CardDescription> */}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
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

            <Input type="text" placeholder="Recherech..." className="w-sm" />
          </div>

          <div className="rounded-lg border">
            <Table>
              <TableHeader className="bg-gray-100/30">
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Journal;
