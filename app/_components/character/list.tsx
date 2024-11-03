"use client"
import { Character } from "@/types/character";
import CharacterItem from "./single-item";
import useStore from "@/store/characters";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import getCharacters from "@/service/characters";
import { useParams, useSearchParams } from "next/navigation";

type CharacterListProps = {
}

export default function CharacterList({  }: CharacterListProps) {

  const store = useStore();
  const searchParams = useSearchParams();
  
  const gender = searchParams.get("gender");
  const status = searchParams.get("status");

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCharacters(gender, status),
    queryKey: ["characters", gender, status], 
  });

  useEffect(() => {
    console.log(gender, status);
  }, [gender, status])
  
  
  return (
    <div className="rckmo-characters">

      <div className="container mx-auto">

        {isLoading && (
          <div className="loader"></div>
        )}

        {
          !isLoading && (
            <div className="grid grid-cols-4 gap-4">
              {data && data.map((character, index) => (
                <CharacterItem key={index} character={character} />
              ))}
            </div>
          )
        }
      </div>


    </div>
  );
}