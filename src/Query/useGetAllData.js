import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useGetAllData = () => {
  return useQuery({
    queryKey: ["AllData"],
    queryFn: () => request.get('').then((res) => res.data),
  });
};
