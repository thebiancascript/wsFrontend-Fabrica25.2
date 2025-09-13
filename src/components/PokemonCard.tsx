import { Pokemon } from "@/types/pokemon";
import Link from "next/link";

interface Props {
  pokemon: Pokemon
  view?: 'grid' | 'list'   // adiciona view como opcional
}


export default function PokemonCard({ pokemon, view = 'grid' }: Props) {
  return (
    <Link href={`/detalhes/${pokemon.id}`}>
      <div className="border p-4 rounded shadow hover:scale-105 transition cursor-pointer flex flex-col items-center">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2 className="font-bold capitalize mt-2">{pokemon.name}</h2>
        <p>#{pokemon.id.toString().padStart(3, "0")}</p>
      </div>
    </Link>
  );
}
