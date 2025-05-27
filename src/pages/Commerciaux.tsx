import AddCommerciaux from "@/components/commerciaux/AddCommerciaux";
import CommerciauxTable from "@/components/commerciaux/CommerciauxTable";
import PrintCommerciaux from "@/components/commerciaux/PrintCommerciaux";
import SearchByInputText from "@/components/commerciaux/SearchByInputText";
import ShareCommerciaux from "@/components/commerciaux/ShareCommerciaux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Commerciaux = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Commerciaux.</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between">
          <SearchByInputText />
          <div className="flex gap-4">
            <AddCommerciaux />
            <PrintCommerciaux />
            <ShareCommerciaux />
          </div>
        </div>

        <CommerciauxTable />
      </CardContent>
    </Card>
  );
};

export default Commerciaux;
