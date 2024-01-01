import Memo from "./Memo";
import Save from "./Memo/Save";
import Temp from "./Memo/Temp";
import Search from "./Search";

function Body({ toggle }: { toggle: boolean }) {
  return toggle ? (
    <Search />
  ) : (
    <Memo>
      <Save />
      <Temp />
    </Memo>
  );
}

export default Body;
