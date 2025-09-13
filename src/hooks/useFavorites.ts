// src/hooks/useFavorites.ts
'use client'

import { useState, useEffect } from 'react'
import { Pokemon } from '@/types/pokemon'

export function useFavorites() {
  const [favorites, setFavorites] = useState<Pokemon[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) setFavorites(JSON.parse(stored))
  }, [])

  function all() {
    return favorites
  }

  function toggle(pokemon: Pokemon) {
    const exists = favorites.some(f => f.id === pokemon.id)
    let newFavs
    if (exists) newFavs = favorites.filter(f => f.id !== pokemon.id)
    else newFavs = [...favorites, pokemon]
    setFavorites(newFavs)
    localStorage.setItem('favorites', JSON.stringify(newFavs))
  }

  return { all, toggle }
}
