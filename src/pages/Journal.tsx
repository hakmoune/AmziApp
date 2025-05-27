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

const Journal = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Journal.</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <SearchByDate />
            <SearchByInputText />
            <SearchByComercial />
          </div>

          <div className="flex gap-4">
            <PrintJournal />
            <ShareJournal />
          </div>
        </div>

        <div className="flex gap-4">
          <SearchByOperations />
          <SearchByComptes />
          <SearchByCompteName />
          <SearchByPayment />
        </div>

        <JournalTable />
      </CardContent>
    </Card>
  );
};

export default Journal;
