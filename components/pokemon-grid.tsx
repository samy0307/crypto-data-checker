"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

interface PokememonCardProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokememonCardProps) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div>
          <h3 className="text-2xl underline py-6 text-center">
            Search For Your Pokemon!
          </h3>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="pokemonName">Pokemon Name</Label>
            <Input
              type="text"
              value={searchText}
              autoComplete="off"
              id="pokemonName"
              placeholder="Charizard, Pikachu, etc"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <h3 className="text-3xl pt-12 pb-6 text-center text-yellow-400">
            Pokemon Collection
          </h3>
        </div>

        <div className="mb-32 grid grid-cols-2 lg:grid-cols-3 text-center w-full max-w-5xl lg:text-left gap-12">
          {filteredPokemonList.map((pokemon: any) => {
            return <PokemonCard key={pokemon.id} name={pokemon.name} />;
          })}
        </div>
      </div>
    </>
  );
}
