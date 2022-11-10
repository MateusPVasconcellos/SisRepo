import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="h-10 bg-slate-800/50">
      <div
        className="text ml-10 flex min-h-full w-20 items-center
       justify-center rounded-3xl bg-slate-500/10 font-bold hover:bg-slate-300"
      >
        <Link href={"/"}>Home</Link>
      </div>
    </header>
  );
}

export default Header;
