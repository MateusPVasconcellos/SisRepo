import React from "react";

export const Pagination = ({
  itensPerPage,
  totalItens,
  paginate,
  currentPage,
}: any) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex justify-center">
      <nav className="h-fit w-fit rounded-md bg-gray-800">
        <ul className="flex">
          {pageNumber.map((number: number) => (
            <li className="flex w-7 items-center justify-center" key={number}>
              <a
                onClick={() => paginate(number)}
                className={`${
                  number === currentPage
                    ? "flex w-full justify-center rounded-md border border-gray-600 p-1"
                    : "flex w-full justify-center p-1"
                }`}
                href="#"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
