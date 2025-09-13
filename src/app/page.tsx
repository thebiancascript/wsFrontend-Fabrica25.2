"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";
import ToggleView from "@/components/ToggleView";
import { usePokemons } from "@/hooks/usePokemons";

export default function Home() {
  const { pokemons, search, setSearch, loading } = usePokemons();
  const [view, setView] = useState<"grid" | "list">("grid");

  if (loading) return <p className="p-4">Carregando...</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="p-4 flex-1">
        <SearchBar search={search} setSearch={setSearch} />
        <ToggleView view={view} setView={setView} />
        <div className={view === "grid" ? "grid grid-cols-2 md:grid-cols-4 gap-4" : "flex flex-col gap-4"}>
          {pokemons.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
