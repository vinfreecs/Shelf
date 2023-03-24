import React from "react";
import books from "./Books";

function Toread() {
  const toReadBooks = books.filter((book) => {
    return book["Exclusive Shelf"] === "to-read";
  });
  // const books = [
  //   {
  //     name: "Tress of the emrald sea",
  //     image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672574587i/60531406.jpg",
  //     rating: 5,
  //   },
  //   {
  //     name: "Skyward",
  //     image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1531845177i/36642458.jpg",
  //     rating: 5,
  //   },
  //   {
  //     name: "Dune",
  //     image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
  //     rating: 5,
  //   },
  //   // add more books as needed
  // ];
  return (
    <div>
      <h1 className="text-white ml-20 mt-48 pl-28 uppercase font-bold text-3xl">
        Want to Read
      </h1>
      <div className="m-20 pl-24 ">
        <div className="flex overflow-x-scroll row_posters">
          {toReadBooks.map((book, index) => (
            <div
              key={index}
              className="max-w-xs m-4 rounded shadow-md overflow-hidden bg-zinc-900 relative flex-shrink-0"
            >
              <img
                className="w-[320px] h-[480px] object-cover"
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
export default Toread;
