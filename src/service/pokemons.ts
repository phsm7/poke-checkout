import api from './baseApiConfig';

const RESOURCE = '/pokemon';

export const Pokemons = {
  all: async (next: string) =>
    await api.get(next ? `${RESOURCE}${next}` : `${RESOURCE}?offset=0&limit=4`),
  getDetails: async (name: string) => await api.get(`${RESOURCE}/${name}`),
};
