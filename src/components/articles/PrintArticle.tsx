import { Button } from "../ui/button";
import { Printer } from "lucide-react";

const PrintArticle = () => {
  return (
    <Button variant="outline">
      <Printer /> Imprimer
    </Button>
  );
};

export default PrintArticle;
