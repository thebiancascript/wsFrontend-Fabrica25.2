import { Pokemon } from "@/types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemons(limit = 151): Promise<Pokemon[]> {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await res.json();

  const promises = data.results.map(async (p: { name: string }) => {
    const res = await fetch(`${BASE_URL}/pokemon/${p.name}`);
    return res.json();
  });

  return Promise.all(promises);
}

export async function fetchPokemonById(id: string | number): Promise<Pokemon> {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  return res.json();
}
