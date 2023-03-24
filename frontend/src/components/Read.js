import React from "react";
import books from "./Books.js";

function Read() {
  const readBooks = books.filter((book) => {
    return book["Exclusive Shelf"] === "read";
  });

  return (
    <div>
      <h1 className="text-white ml-20 mt-48 pl-28 uppercase font-bold text-3xl">
        READ
      </h1>
      <div className="m-20 pl-24">
        <div className="flex overflow-x-scroll row_posters ">
          {readBooks.map((book, index) => (
            <div
              key={index}
              className="max-w-xs m-4 rounded shadow-md overflow-hidden bg-zinc-900 relative flex-shrink-0"
            >
              <img
                className="w-full h-[480px] object-cover"
                src={book.image}
                alt={book.Title}
              />
              <div className="mt-2">
                <span className="font-bold text-sky-400 lowercase">
                  {book.Title}
                </span>
              </div>
              <div className="bg-zinc-500 text-sky-300 text-xs font-bold rounded-full p-2 absolute top-0 ml-1 mt-1">
                <span>{book.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Read;
 