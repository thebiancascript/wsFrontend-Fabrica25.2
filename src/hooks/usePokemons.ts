'use client'
import { useState, useEffect } from 'react'
import { fetchPokemons } from '../lib/pokeapi'
import type { Pokemon } from '../types/pokemon'

export function usePokemons(limit = 151) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchPokemons(limit)
      .then(setPokemons)
      .finally(() => setLoading(false))
  }, [limit])

  // filtro de pesquisa
  const filtered = pokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return { pokemons: filtered, loading, search, setSearch }
}
