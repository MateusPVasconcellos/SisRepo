import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="h-10 w-full bg-slate-800/50">
      <nav className="flex h-full w-full items-center">
        <div
          className="ml-10 flex h-full w-20 items-center
       justify-center rounded-3xl bg-slate-500/10 font-bold hover:bg-slate-300"
        >
          <Link
            className="flex h-full w-full items-center justify-center"
            href={"/"}
          >
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
