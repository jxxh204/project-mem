import { useSearchContext } from "@/contexts/search";

function Search() {
  const context = useSearchContext();
  return (
    <section data-testid="search-head">
      <ul>
        {context?.questions.map((q, index) => (
          <li key={"questions" + index}>{q}</li>
        ))}
      </ul>
    </section>
  );
}

export default Search;
