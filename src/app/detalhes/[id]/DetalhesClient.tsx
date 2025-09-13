'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useFavorites } from '@/hooks/useFavorites'
import { Pokemon } from '@/types/pokemon'

// Tipo para os elementos do array types
interface PokemonType {
  type: {
    name: string
  }
}

interface Props {
  id: string
}

export default function DetalhesClient({ id }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const { toggle, all } = useFavorites()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data: Pokemon = await res.json()
      setPokemon(data)
      setIsFavorite(all().some(f => f.id === data.id))
    }
    fetchPokemon()
  }, [id, all])

  if (!pokemon) return <p className="text-center mt-10">Carregando...</p>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#14004d] text-red-500">
      <h1 className="text-3xl font-bold mb-4">{pokemon.name}</h1>

      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
        className="mb-4"
      />

      <p>ID: {pokemon.id}</p>
      <p>
        Tipo(s):{' '}
        {pokemon.types
          .map((t: PokemonType) => t.type.name) // tipagem explícita
          .join(', ')}
      </p>
      <p>Peso: {pokemon.weight}</p>
      <p>Experiência Base: {pokemon.base_experience}</p>

      <button
        onClick={() => {
          toggle(pokemon)
          setIsFavorite(!isFavorite)
        }}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        {isFavorite ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  )
}
