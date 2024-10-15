import Link from "next/link";

interface PokememonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokememonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent px-4 py-4 transition-colors m-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      <h2 className="text-2xl font-semibold"></h2>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </Link>
  );
}
