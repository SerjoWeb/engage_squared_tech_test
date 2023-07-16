import API from './config';
import type { Response } from './response.types';

// API endpoints
const api = {
  async getsAllBikePointLocations(): Promise<Response[]> {
    const res = await API.get('/');
    return res.data as Response[];
  },
  async getsTheBikePointWithTheGivenId(id: string): Promise<Response> {
    const res = await API.get(`/${id}`);
    return res.data as Response;
  },
  async searchForBikeStationsByTheirName(query: string): Promise<Response> {
    const res = await API.get(`Search?query=${query}`);
    return res.data as Response;
  }
};

export default api;
