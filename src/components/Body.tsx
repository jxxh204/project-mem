import { useToggleContext } from "@/contexts/toggle";
import Memo from "./Memo";
import Save from "./Memo/Save";
import Temp from "./Memo/Temp";
import Search from "./Search";

function Body() {
  const context = useToggleContext();

  return context.toggle ? (
    <Search />
  ) : (
    <Memo>
      <Save />
      <Temp />
    </Memo>
  );
}

export default Body;
