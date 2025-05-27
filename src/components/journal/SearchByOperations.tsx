import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Option = {
  label: string;
  value: string;
};

const options: Option[] = [
  { label: "Devis", value: "devis" },
  { label: "B.C", value: "bon-commande" },
  { label: "B.L", value: "bon-livraison" },
  { label: "Retour", value: "retour" },
  { label: "Régl", value: "réglement" },
  { label: "Imp", value: "impayé" },
  { label: "Fact", value: "facture" },
  { label: "Frais", value: "frais" },
];

const SearchByOperations = () => {
  const [selected, setSelected] = useState<Option[]>([]);
  const [open, setOpen] = useState(false);

  const toggleOption = (option: Option) => {
    const exists = selected.find((item) => item.value === option.value);
    if (exists) {
      setSelected((prev) => prev.filter((item) => item.value !== option.value));
    } else {
      setSelected((prev) => [...prev, option]);
    }
  };

  const removeOption = (value: string) => {
    setSelected((prev) => prev.filter((item) => item.value !== value));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[250px] justify-start flex-wrap gap-2"
        >
          {selected.length === 0 ? (
            <span className="text-gray-500">Opérations...</span>
          ) : (
            selected.map((item) => (
              <Badge
                key={item.value}
                className="flex gap-0.5 items-center"
                variant="secondary"
              >
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    removeOption(item.value);
                  }}
                  className="rounded-sm hover:bg-muted px-1 cursor-pointer"
                >
                  <X className="h-3 w-3" />
                </span>
                {item.label}
              </Badge>
            ))
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Rechercher..." />
          <CommandList>
            {options.map((option) => {
              const isSelected = selected.some(
                (item) => item.value === option.value
              );
              return (
                <CommandItem
                  key={option.value}
                  onSelect={() => toggleOption(option)}
                  className="cursor-pointer"
                >
                  <div
                    className={cn(
                      "mr-2 h-4 w-4 rounded-sm border border-primary",
                      isSelected ? "bg-primary text-white" : "bg-white"
                    )}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>
                  {option.label}
                </CommandItem>
              );
            })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchByOperations;
