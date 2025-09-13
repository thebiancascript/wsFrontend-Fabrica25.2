interface Props {
  search: string;
  setSearch: (s: string) => void;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Buscar Pokémon..."
      className="border p-2 rounded w-full mb-4"
    />
  );
}
