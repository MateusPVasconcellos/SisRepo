import React from "react";
import LogoImage from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import GitHubImage from "../../public/GitHub-Mark-Light-32px.png";
import { UserDataProps } from "../pages/repositorie/user";

interface ListHeaderProps {
  user: UserDataProps;
}

export const ListHeader = ({ user }: ListHeaderProps) => {
  return (
    <header className="mt-4 box-border flex w-full">
      <Image
        className="h-16 w-16 rounded-xl border-2 border-blue-200 md:h-36 md:w-36"
        loader={() => user.avatarUrl}
        src={user.avatarUrl}
        alt="avatar"
        quality={100}
        height={0}
        width={0}
      />

      <div className="ml-4 flex-1 md:ml-10">
        <div className="mt-1 text-xl md:text-4xl">
          <p>{user.name}</p>
        </div>
        <nav className="mt-3 md:mt-14">
          <Link
            className="flex items-center text-xs md:mt-4 md:text-xl"
            target="_blank"
            href={user.githubUrl}
          >
            Clique aqui para ver no GitHub
            <Image
              className="h-0 w-0 md:ml-2 md:h-5 md:w-5"
              quality={100}
              alt="github"
              src={GitHubImage}
            />
          </Link>
        </nav>
      </div>

      <Image
        className="h-16 w-16 md:mr-2 md:h-36 md:w-36"
        src={LogoImage}
        alt="SisRepo"
        quality={100}
        height={0}
        width={0}
      />
    </header>
  );
};
