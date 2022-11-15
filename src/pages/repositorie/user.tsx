import GitHubImage from "../../../public/GitHub-Mark-Light-32px.png";
import Image from "next/image";
import Link from "next/link";
import { imageType } from "../../lib/imageType";
import { Pagination } from "../../components/Pagination";
import { ListHeader } from "../../components/ListHeader";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import Custom404 from "../404.js";

export interface UserDataProps {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  key: number;
  repoName: string;
  repoUrl: string;
  createdAt: string;
  updatedAt: string;
  language: string;
}

export default function List() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itensPerPage] = useState<number>(5);
  const { userData } = useSearch();

  const indexOfLastItem = currentPage * itensPerPage;
  const indexOfFirstItem = indexOfLastItem - itensPerPage;
  const currentItens = userData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!userData.length) return <Custom404 />;

  return (
    userData.length && (
      <div className="mx-auto max-w-[80%] text-white">
        <ListHeader user={userData[1]} />
        <div className="flex justify-center">
          <h1 className="mt-5 text-2xl md:text-3xl">Repositórios</h1>
        </div>

        <div className="mx-auto flex justify-center">
          <main className="mt-4 box-border w-full rounded-lg border-2 border-gray-600 bg-gray-900 px-3 pb-3">
            <ul>
              {currentItens.map((el: UserDataProps) => (
                <li
                  key={el.key}
                  className="my-2 flex rounded-lg rounded-l-2xl bg-gray-800 md:my-3"
                >
                  <Image
                    className="w-14 rounded-xl border-2 border-blue-200 md:w-16"
                    src={imageType(el.language)}
                    alt="language type"
                    quality={100}
                    width={0}
                    height={0}
                  />
                  <div className="flex flex-grow items-center justify-between py-3 px-4 md:py-5 md:text-xl">
                    <div>
                      <p>{el.repoName}</p>
                    </div>
                    <div className="flex items-center md:mr-3">
                      <Link target="_blank" href={el.repoUrl}>
                        <Image
                          className="w-6"
                          quality={100}
                          alt="github"
                          src={GitHubImage}
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Pagination
              paginate={paginate}
              itensPerPage={itensPerPage}
              totalItens={userData.length}
              currentPage={currentPage}
            />
          </main>
        </div>
      </div>
    )
  );
}
