import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { User, UserDataProps } from "../pages/repositorie/user";

interface SearchProviderProps {
  children: ReactNode;
}

export interface SearchContextDataProps {
  search: (user: string) => Promise<void>;
  isSearchLoading: boolean;
  userData: UserDataProps[];
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}
export const AuthContext = createContext({} as SearchContextDataProps);

export function SearchContextProvider({ children }: SearchProviderProps) {
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);

  const search = async (user: string) => {
    try {
      setIsSearchLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );

      const data = await response.json();

      if (data.message === "Not Found") {
        throw Error("Usuário não encontrado.");
      }
      if (data.message) {
        throw Error("Desculpe, tente mais tarde.");
      }

      const repoData: UserDataProps[] = data.map((e: User) => {
        return {
          key: e.id,
          repoName: e.name,
          repoUrl: e.html_url,
          createdAt: e.created_at,
          updatedAt: e.updated_at,
          language: e.language,
          name: e.owner.login,
          avatarUrl: e.owner.avatar_url,
          githubUrl: e.owner.html_url,
        };
      });

      setUserData(repoData);
      router.push("/repositorie/user");
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsSearchLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        search,
        isSearchLoading,
        userData,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
