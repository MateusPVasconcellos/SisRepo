import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import LogoImage from "../../public/logo.png";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="mx-auto flex w-11/12 justify-center text-base">
      <main>
        <div className="flex items-center justify-center pt-10">
          <Image
            src={LogoImage}
            alt="SisRepo"
            quality={100}
            className="w-1/3 md:w-1/4"
          />
        </div>

        <h1 className="mt-14 flex justify-center text-xl font-bold leading-tight text-white md:text-5xl">
          Liste os repositórios dos seus amigos!
        </h1>
        <Form />
      </main>
    </div>
  );
}
