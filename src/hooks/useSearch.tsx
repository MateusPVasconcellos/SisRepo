import { useContext } from "react";
import { AuthContext, SearchContextDataProps } from "../contexts/SearchContext";

export function useSearch(): SearchContextDataProps {
  const context = useContext(AuthContext);

  return context;
}
