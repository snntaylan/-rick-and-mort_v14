import { Character } from '@/types/character'
import { create } from 'zustand'

type Store = {
  filter: {
    gender: string,
    status: string,
  }
  characters: Character[],
  setFilter: (filter: any) => void
  setCharacters: (charcters: Character[]) => void
}

const useStore = create<Store>()((set) => ({
  filter: {
    gender: '',
    status: '',
  },
  characters: [],
  setFilter: (filter: any) => set((state) => ({ 
    filter: { gender: filter.gender, 
      status: filter.status } 
    })
  ),
  setCharacters: (characters: Character[]) => set((state) => ({ 
    characters: characters,
    })
  ),
}))

export default useStore;