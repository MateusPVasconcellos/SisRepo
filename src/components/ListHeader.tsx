import React from "react";
import LogoImage from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import GitHubImage from "../../public/GitHub-Mark-Light-32px.png";
import { UserProps } from "../pages/repositorie/[user]";

interface ListHeaderProps {
  user: UserProps;
}

export const ListHeader = ({ user }: ListHeaderProps) => {
  console.log(user);
  return (
    <div className="flex justify-center">
      <header className="mt-4 box-border w-3/4 p-3">
        <div className="flex justify-between">
          <Image
            className="rounded-xl border-2 border-blue-200"
            loader={() => user.avatarUrl}
            src={user.avatarUrl}
            alt="avatar"
            quality={100}
            height={100}
            width={100}
          />
          <div className="ml-8 flex-1 text-2xl">
            <div className="mt-2 flex">
              <p>{user.name}</p>
            </div>
            <div className="mt-4 flex text-xl">
              <Link className="flex" target="_blank" href={user.githubUrl}>
                Clique aqui para ver no GitHub
                <Image
                  className="ml-2 w-7"
                  quality={100}
                  alt="github"
                  src={GitHubImage}
                />
              </Link>
            </div>
          </div>

          <Image
            src={LogoImage}
            alt="SisRepo"
            quality={100}
            height={100}
            width={100}
          />
        </div>
      </header>
    </div>
  );
};
