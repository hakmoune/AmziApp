import Banque from "@/components/tresorerie/banque/Banque";
import Classeur from "@/components/tresorerie/classeur/Classeur";
import PrintClasseur from "@/components/tresorerie/classeur/PrintClasseur";
import ShareClasseur from "@/components/tresorerie/classeur/ShareClasseur";
import Impayés from "@/components/tresorerie/impayés/Impayés";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tresorerie = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trésorerie.</CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="classeur">
          <div className="flex justify-between">
            <TabsList className="grid grid-cols-3 w-[400px]">
              <TabsTrigger value="classeur">Classeur</TabsTrigger>
              <TabsTrigger value="banque">Banque</TabsTrigger>
              <TabsTrigger value="impayés">Impayés</TabsTrigger>
            </TabsList>
            <div className="flex gap-4">
              <PrintClasseur />
              <ShareClasseur />
            </div>
          </div>

          <TabsContent value="classeur" className="mt-1.5">
            <Classeur />
          </TabsContent>

          <TabsContent value="banque">
            <Banque />
          </TabsContent>

          <TabsContent value="impayés">
            <Impayés />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Tresorerie;
