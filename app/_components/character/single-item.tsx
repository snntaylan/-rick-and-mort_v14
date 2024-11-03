"use client"
import { Character } from "@/types/character";
import Image from "next/image";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

type CharacterItemProps = {
  character: Character
}

export default function CharacterItem({ character }: CharacterItemProps) {

  return (
    <div className="rckmo-character rounded-3xl bg-slate-800 p-4">
      <div className="rckmo-img-wrapper relative w-full h-64">
        <span className="absolute z-10 top-3 left-3 rounded-full bg-red-600 px-3 py-0.5 font-medium text-white">{ character.species }</span>
        <Image 
          className="rounded-3xl object-cover object-top"
          src={character.image} 
          fill={true}
          alt={`${character.name} Character`}
          />
      </div>
      <div className="rcko-content-wrapper px-3 mt-2">
        <h1 className="text-white text-[22px] font-semibold">{ character.name }</h1>

        <div className="flex mt-3 gap-4">
          <div className="relative flex items-center gap-x-2">
            {
              character.gender == "Male" 
              ? <MaleIcon sx={{ fill: "#309aff" }} fontSize="large" />
              : <FemaleIcon sx={{ fill: "#ee7cff" }} fontSize="large" />
            }
            <div className="text-sm/6">
              <p className="font-semibold text-gray-400">
                <a href="#">
                  Gender
                </a>
              </p>
              <p className="text-gray-50">{ character.gender }</p>
            </div>
          </div>
          <div className="relative flex items-center gap-x-2">
            <FiberManualRecordOutlinedIcon sx={{ fill: character.status == "Alive" ? "#40eb40" : character.status == "unknown" ? "#aaa" : "red" }} fontSize="large" />
            <div className="text-sm/6">
              <p className="font-semibold text-gray-400">
                <a href="#">
                  Status
                </a>
              </p>
              <p className="text-gray-50">{ character.status }</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rcko-footer-wrapper mt-3">
        <button className="rcko-button rounded-xl px-3 py-3 w-full font-semibold leading-5 text-white">View Character</button>
      </div>
    </div>
  );
}