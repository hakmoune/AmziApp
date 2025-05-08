import AddArticle from "@/components/articles/AddArticle";
import ArticlesTable from "@/components/articles/ArticlesTable";
import FilterByStock from "@/components/articles/FilterByStock";
import PrintArticle from "@/components/articles/PrintArticle";
import SearchByInputText from "@/components/articles/SearchByInputText";
import ShareArticle from "@/components/articles/ShareArticle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Articles = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Articles.</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <SearchByInputText />
            <FilterByStock />
          </div>
          <div className="flex gap-4">
            <AddArticle />
            <PrintArticle />
            <ShareArticle />
          </div>
        </div>
        <ArticlesTable />
      </CardContent>
    </Card>
  );
};

export default Articles;
