import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

function BookUpload(props) {
  const [book, setBook] = useState({
    Title: "",
    Author: "",
    img: "",
    Review: "",
    book_shelf: "",
    pages: "",
    description: "",
    progress:""
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const collectionRef = collection(db, `users/${props.userId}/books`);

    setBook({
      Title: "",
      Author: "",
      img: "",
      Review: "",
      book_shelf: "",
      pages: "",
      description: "",
    });
    setIsOpen(false);
    await addDoc(collectionRef, book);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="fixed bottom-0 right-0 pr-2 pb-2">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleOpen}
        >
          Add Book
        </button>
      </div>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={handleClose}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Upload
                </h3>
                <div className="mt-5">
                  <input
                    type="text"
                    name="Title"
                    placeholder="Title"
                    value={book.Title}
                    onChange={handleChange}
                    className="w-full mb-2 px-3 py-2 border text-black border-gray-400 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Image link"
                    name="img"
                    value={book.img}
                    onChange={handleChange}
                    className="w-full mb-2 px-3 py-2 border text-black border-gray-400 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Author"
                    name="Author"
                    value={book.Author}
                    onChange={handleChange}
                    className="w-full mb-2 px-3 py-2 border text-black border-gray-400 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Review"
                    name="Review"
                    value={book.Review}
                    onChange={handleChange}
                    className="w-full mb-2 px-3 py-2 border text-black border-gray-400 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="pages"
                    name="pages"
                    value={book.pages}
                    onChange={handleChange}
                    className="w-full mb-2 px-3 py-2 border text-black border-gray-400 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="book_shelf:read,reading,to-read"
                    name="book_shelf"
                    value={book.book_shelf}
                    onChange={handleChange}
                    className="w-full mb-2 px-3 py-2 border text-black border-gray-400 rounded-md"
                  />
                  <textarea
                    placeholder="description"
                    name="description"
                    value={book.description}
                    onChange={handleChange}
                    className="w-full mb-2 px-3 py-2 border text-black border-gray-400 rounded-md"
                  ></textarea>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default BookUpload;
