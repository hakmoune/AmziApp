import ClasseurTable from "./ClasseurTable";
import SearchByCompte from "./SearchByCompte";
import SearchByDateEch from "./SearchByDateEch";
import SearchByDateOper from "./SearchByDateOper";
import SearchByInputText from "./SearchByInputText";
import SearchByProprio from "./SearchByProprio";
import SearchByType from "./SearchByType";

const Classeur = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <SearchByDateEch />
        <SearchByInputText />
        <SearchByType />
      </div>
      <div className="flex gap-4">
        <SearchByCompte />
        <SearchByProprio />
        <SearchByDateOper />
      </div>

      <ClasseurTable />
    </div>
  );
};

export default Classeur;
