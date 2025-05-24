import BanqueTable from "./BanqueTable";
import SearchByCompte from "./SearchByCompte";
import SearchByDateEch from "./SearchByDateEch";
import SearchByDateOper from "./SearchByDateOper";
import SearchByInputText from "./SearchByInputText";
import SearchByProprio from "./SearchByProprio";
import SearchByType from "./SearchByType";

const Banque = () => {
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

      <BanqueTable />
    </div>
  );
};

export default Banque;
