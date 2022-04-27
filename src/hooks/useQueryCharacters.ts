import { useQuery } from "react-query";
import getCharacters from "../services/getCharacters";

function useQueryCharacters(page: number) {
  return useQuery(["characters", page], () => getCharacters(page), {
    keepPreviousData: true,
  });
}

export default useQueryCharacters;
