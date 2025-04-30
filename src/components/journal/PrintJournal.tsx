import { Button } from "../ui/button";
import { Printer } from "lucide-react";

const PrintJournal = () => {
  return (
    <Button variant="outline">
      <Printer /> Imprimer
    </Button>
  );
};

export default PrintJournal;
