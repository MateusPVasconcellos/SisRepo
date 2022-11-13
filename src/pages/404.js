import Link from "next/link";
import React from "react";

function Custom404() {
  return (
    <div className="block h-40 items-center">
      <div className="flex items-center justify-center text-xl">
        Desculpe, pagina não encontrada.
      </div>
      <div className="mt-10 flex items-center justify-center text-xl">
        <Link href="/">Voltar para Home</Link>
      </div>
    </div>
  );
}

export default Custom404;
