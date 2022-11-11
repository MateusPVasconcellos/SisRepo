import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import LogoImage from "../../public/logo.png";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="mx-auto flex justify-center">
      <main>
        <div className="flex items-center justify-center pt-10">
          <Image src={LogoImage} alt="SisRepo" quality={100} width={200} />
        </div>

        <h1 className="mt-14 text-5xl font-bold leading-tight text-white">
          Liste os repositórios dos seus amigos!
        </h1>
        <Form />
      </main>
    </div>
  );
}
