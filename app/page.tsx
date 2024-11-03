import Image from "next/image";
import CharacterList from "./_components/character/list";
import Filter from "./_components/character/filter";

export default function Home() {
  return (
    <div className="rckmo-wrapper font-[family-name:var(--font-geist-sans)]">
      <Filter />
      <CharacterList />
    </div>
  );
}
