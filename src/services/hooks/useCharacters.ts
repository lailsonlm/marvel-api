import axios from "axios";
import { useQuery } from "react-query";

interface CharactersProps {
  attributionText: string,
  data: {
    total: number,
    offset: number,
    limit: number,
    results: Results
  }
}

type Results = {
  id: number,
  name: string,
  description: string,
  thumbnail: {
    path: string,
    extension: string,
  }
}[]

const md5 = require('md5');
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
const publicKey = process.env.NEXT_PUBLIC_KEY
const ts = new Date().getTime();
const hash = md5(ts+privateKey+publicKey)


export function useCharacters(offset: number, currentPage: number) {
return useQuery(['characters', offset], async () => {
  const response = await axios.get<CharactersProps>('https://gateway.marvel.com/v1/public/characters', {
    params: {
      apikey: publicKey,
      ts,
      hash,
      limit: 30,
      offset,
    },
    headers: {
      Accept: '*/*',
    }
  })

  return response.data
})
}