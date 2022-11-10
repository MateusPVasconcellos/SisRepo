import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import LogoImage from "../../public/logo.png";

export default function Home() {
  const [user, setUser] = useState<string>("");
  const router = useRouter();

  async function searchRepositories(event: FormEvent) {
    event.preventDefault();
    router.push(`/repositorie/${user}`);
  }

  return (
    <div className="mx-auto flex justify-center">
      <main>
        <div className="flex items-center justify-center pt-10">
          <Image src={LogoImage} alt="SisRepo" quality={100} width={200} />
        </div>

        <h1 className="mt-14 text-5xl font-bold leading-tight text-white">
          Liste os repositórios dos seus amigos!
        </h1>

        <form
          onSubmit={searchRepositories}
          className="mt-10 flex flex-col items-center"
        >
          <input
            className="flex w-2/5 rounded-md border border-gray-600 bg-gray-800 py-4 px-6 text-gray-100"
            type="text"
            required
            placeholder="Qual nome do usuário?"
            onChange={(event) => setUser(event.target.value)}
            value={user}
          />
          <button
            className="mt-10 max-w-md rounded bg-yellow-500 px-6 py-4 text-sm font-bold uppercase text-gray-900 hover:bg-yellow-600"
            type="submit"
          >
            Pesquisar Repositórios
          </button>
        </form>
      </main>
    </div>
  );
}
