import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, devtools } from 'zustand/middleware';

import { Response } from '../api/response.types';

import api from '../api/api';

interface Store {
  data: Response[] | Response;
  setsAllBikePointLocations: () => unknown;
  setsTheBikePointWithTheGivenId: (id: string) => unknown;
  setSearchForBikeStationsByTheirName: (query: string) => unknown;
}

// create a storage to have an opportunity
// to work with API response locally
// and keep response data in our local App Storage
const useStore = create<Store>()(persist(devtools(immer((set) => ({
  data: [],
  setsAllBikePointLocations: async () => {
    const data = await api.getsAllBikePointLocations();
    set({ data });
  },
  setsTheBikePointWithTheGivenId: async (id: string) => {
    const data = await api.getsTheBikePointWithTheGivenId(id);
    set({ data });
  },
  setSearchForBikeStationsByTheirName: async (query: string) => {
    const data = await api.searchForBikeStationsByTheirName(query);
    set({ data });
  },
}))), { name: 'storeApiTest', version: 1 }));

export default useStore;
