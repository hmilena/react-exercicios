import { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import { PiDivideBold } from "react-icons/pi";

const SearchResult = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);
    setCharacters([]);

    const url =
      "https://raw.githubusercontent.com/hmilena/TheWitcherAPI/refs/heads/master/data/characters.json";

    fetch(url)
      .then(function (res) {
        if (!res.ok) {
          if (res.status === 400 || res.status === 404) {
            throw new Error("Nenhum personagem encontrado.");
          }
          throw new Error(`Erro API: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;

        setCharacters(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Não foi possível carregar os personagens.");
        setCharacters([]);
      })
      .finally(() => {
        if (cancelled) return;
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    setQuery("");
  };

  const filteredCharacters = characters.filter((char) => {
    const q = query.toLowerCase();
    const professionText = Array.isArray(char.profession)
      ? char.profession.join(" ")
      : char.profession || "";

    return (
      char.name?.toLowerCase().includes(q) ||
      char.race?.toLowerCase().includes(q) ||
      professionText.toLowerCase().includes(q)
    );
  });

  if (error && !characters.length) {
    return <EmptyState />;
  }

  return (
    <div>
      <h4>The Witcher API</h4>
      <form className="mb-5" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Procure por nome, raça ou profissão"
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>

      <ul className="grid grid-cols-5 gap-2">
        {!isLoading &&
          filteredCharacters.map((char) => (
            <li
              className="flex items-center justify-start gap-4 p-2 bg-purple-50 border border-purple-200 rounded"
              key={char.id}
            >
              <div className="size-12 shrink-0 rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 dark:outline-white/10"></div>
              <div className="flex flex-col truncate">
                <span className="text-sm/6 font-medium text-gray-950 dark:text-white">
                  {char.name}
                </span>
                <span className="truncate text-sm/6 text-gray-500 dark:text-gray-400">
                  {Array.isArray(char.profession)
                    ? char.profession.join(", ")
                    : char.profession}
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default SearchResult;
