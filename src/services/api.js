import { $fetch } from 'ohmyfetch'
const api = $fetch.create({baseURL: 'http://localhost:5500'})

export const getVehicles = async () => api(`/cars`, { method: 'GET' });

export const createVehicle = async (vehicle) => {
  return api(`/cars`, { method: 'POST', body: vehicle });
}