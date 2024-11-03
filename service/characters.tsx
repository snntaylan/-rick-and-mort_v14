import useStore from "@/store/characters";
import { Character } from "@/types/character";
import { ServerResponse } from "@/types/response";

async function getData(gender?: string | null, status?: string | null) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const params = new URLSearchParams({
    ...(gender && { gender }),
    ...(status && { status }),
  }).toString();

  const response = fetch(
    `https://rickandmortyapi.com/api/character?${params}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export default async function getCharacters(gender?: string | null, status?: string | null) {
  const response: ServerResponse<Character> = await getData(gender, status);
  
  return response.results;
}