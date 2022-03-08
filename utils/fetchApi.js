import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'e772fc0311mshbdab848afb8d90bp1f4a3djsn575f2474d082'
      }
  });
    
  return data;
}