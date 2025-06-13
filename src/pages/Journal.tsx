import SearchByDate from "@/components/journal/SearchByDate";
import SearchByInputText from "@/components/journal/SearchByInputText";
import PrintJournal from "@/components/journal/PrintJournal";
import ShareJournal from "@/components/journal/ShareJournal";
import SearchByPayment from "@/components/journal/SearchByPayment";
import SearchByComptes from "@/components/journal/SearchByComptes";
import SearchByOperations from "@/components/journal/SearchByOperations";
import SearchByCompteName from "@/components/journal/SearchByCompteName";
import JournalTable from "@/components/journal/JournalTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SearchByComercial from "@/components/journal/SearchByComercial";
import OperationsClient from "@/components/journal/OperationsClient";
import OperationsFournisseur from "@/components/journal/OperationsFournisseur";

const Journal = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Journal.</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <SearchByDate />
              <SearchByInputText />
              <SearchByOperations />
            </div>
            <div className="flex gap-4">
              <SearchByComptes />
              <SearchByCompteName />
              <SearchByComercial />
              <SearchByPayment />
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4">
              <PrintJournal />
              <ShareJournal />
            </div>
            <div className="flex gap-4">
              <OperationsClient />
              <OperationsFournisseur />
              <ShareJournal />
            </div>
          </div>
        </div>

        <JournalTable />
      </CardContent>
    </Card>
  );
};

export default Journal;
