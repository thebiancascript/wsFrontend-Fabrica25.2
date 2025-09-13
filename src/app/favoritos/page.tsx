'use client'

import { useState, useEffect } from 'react'
import PokemonCard from '@/components/PokemonCard'
import { useFavorites } from '@/hooks/useFavorites'
import { Pokemon } from '@/types/pokemon'

export default function FavoritosPage() {
  const { all } = useFavorites()
  const [favoriteItems, setFavoriteItems] = useState<Pokemon[]>([])

  // Atualiza a lista de favoritos quando o componente monta
  useEffect(() => {
    setFavoriteItems(all())
  }, [all])

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meus Favoritos</h1>

      {favoriteItems.length === 0 ? (
        <p className="text-gray-600">Você ainda não favoritou nenhum Pokémon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {favoriteItems.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  )
}
