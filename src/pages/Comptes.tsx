import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComptesTable from "@/components/comptes/ComptesTable";
import PrintComptes from "@/components/comptes/PrintComptes";
import SearchByComercial from "@/components/comptes/SearchByComercial";
import SearchByCompteName from "@/components/comptes/SearchByCompteName";
import ShareComptes from "@/components/comptes/ShareComptes";
import AddCompte from "@/components/comptes/AddCompte";

const Comptes = () => {
  const [compte, setCompte] = useState<string>("clients");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comptes.</CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs value={compte} onValueChange={setCompte}>
          <div className="flex justify-between">
            <TabsList className="grid grid-cols-2 w-[270px]">
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="fournisseurs">Fournisseurs</TabsTrigger>
            </TabsList>
            <div className="flex gap-4">
              <AddCompte />
              <PrintComptes />
              <ShareComptes />
            </div>
          </div>

          <TabsContent value={compte} className="flex flex-col gap-4 mt-1.5">
            <div className="flex gap-4">
              <SearchByCompteName />
              <SearchByComercial />
            </div>

            <ComptesTable />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Comptes;
