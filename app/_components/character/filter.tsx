"use client"
import { Character } from "@/types/character";
import CharacterItem from "./single-item";
import { ChangeEvent, useEffect, useState } from "react";
import useStore from "@/store/characters";
import { useQuery } from "@tanstack/react-query";
import { ServerResponse } from "@/types/response";
import { useRouter } from "next/navigation";

type CharacterListProps = {
  
}

export default function Filter({  }: CharacterListProps) {

  const [form, setForm] = useState({})
  const { filter, setFilter } = useStore();
  const router = useRouter()

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const fetchCharacters = async (event: any) => {
    const params = new URLSearchParams({
      ...(filter.gender && { gender: filter.gender }),
      ...(filter.status && { status: filter.status }),
    }).toString();
    
    router.push(`/?${params}`)
  }

  useEffect(() => {
    setFilter(form)
  }, [form]);

  return (
    <div className="rckmo-filter">

      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 p-6 ">
          
          <div>
            <label htmlFor="status" className="block text-sm/6 font-medium text-gray-900">Status</label>
            <div className="mt-2">
              <select id="status" name="status" onChange={handleChange} autoComplete="status" className="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6">
                <option value={""}>Select Status</option>
                <option value={"alive"}>Alive</option>
                <option value={"dead"}>Dead</option>
                <option value={"unknown"}>Unknown</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">Gender</label>
            <div className="mt-2">
              <select id="gender" name="gender" onChange={handleChange} autoComplete="gender" className="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6">
                <option value={""}>Select Gender</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"genderless"}>Genderless</option>
                <option value={"unknown"}>Unknown</option>
              </select>
            </div>
          </div>

          <div className="self-end">
            <button onClick={fetchCharacters} className="bg-slate-900 hover:bg-slate-600 rounded-lg px-8 py-3 font-semibold leading-5 text-white">Filter Characters</button>
          </div>

        </div>
      </div>




    </div>
  );
}