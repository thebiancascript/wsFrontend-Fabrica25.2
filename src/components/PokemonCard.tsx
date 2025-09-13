import { Pokemon } from "@/types/pokemon";
import Link from "next/link";
import Image from "next/image";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Link href={`/detalhes/${pokemon.id}`}>
      <div className="border p-4 rounded shadow hover:scale-105 transition cursor-pointer flex flex-col items-center">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={100}
          height={100}
          priority
        />
        <h2 className="font-bold capitalize mt-2">{pokemon.name}</h2>
        <p>#{pokemon.id.toString().padStart(3, "0")}</p>
      </div>
    </Link>
  );
}
