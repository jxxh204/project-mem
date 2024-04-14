function MemoHook() {
  const onFetchHandler = (
    url: string,
    method: "GET" | "POST",
    body: object,
    Authorization?: string
  ) =>
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        // Authorization: Authorization ? Authorization : undefined,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .catch((err) => console.error("Fetch Handler Error : ", err));

  const memo = () => {
    const Input = (memo: string[]) => {
      const body = {
        content: "",
      };
      memo.forEach((string) => {
        body.content += string + "\n";
      });

      return onFetchHandler(
        import.meta.env.VITE_MEMO_API + "memo",
        "POST",
        body
      );
    };
    const Search = () => {
      return onFetchHandler(import.meta.env.VITE_MEMO_API + "query");
    };
    return {
      Input,
      Search,
    };
  };

  return { Input: memo().Input, Search: memo().Search };
}

export default MemoHook;
