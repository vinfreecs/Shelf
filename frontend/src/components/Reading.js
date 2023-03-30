import React from "react";
import { db } from "../firebaseConfig.js";
import { onSnapshot, collection } from "@firebase/firestore";
import { useEffect, useState } from "react";
import BookEdit from "./BookEdit.js";
import BookDelete from "./BookDelete.js";

function Reading() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  const [readBooks, setReadbooks] = useState([]);
  
  const [isOpen, setIsOpen] = useState(false);
  useEffect(
    () =>
      onSnapshot(collection(db, "books"), (snapshot) => {
        setReadbooks(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );
  const [sendBook,setSendBook]=useState({});
  const handleEdit = (book) => {
    setSendBook(book)
  }
  const [openDelete,setOpenDelete] = useState(false);
  const [deleteId,setDeleteId] = useState("");
  const handleDelete = (id) => {
    setDeleteId(id)
  }
  const toReadBooks = readBooks.filter((book) => {
    return book["book_shelf"] === ("reading");
  });

  function handleShow(event) {
    setShow(!show);
  }
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      setShow(!show);
    }
  }

  function updateProgress(event) {
    setProgress(event.target.value);
  }

  return (
    <div>
      {isOpen && <BookEdit sendBook={sendBook} setIsOpen={setIsOpen} />}
      {openDelete && (
        <BookDelete deleteId={deleteId} setOpenDelete={setOpenDelete} />
      )}
      {toReadBooks.map((book) => 
      <div className="md:flex flex-collg:flex ml-20 pt-5">
      
      <div className="flex flex-col items-center h-[60%] w-[30%] m-4">
        <img
          className="rounded-lg h-auto max-h-[500px] max-w-[90vw]"
          src={book.img}
          alt="Oathbringer"
          onKeyDown={handleShow}
        />
        <div className="pt-4 w-full">
          <div
            className="max-w-[90vw] bg-gray-200 rounded-full overflow-hidden h-2"
            onClick={handleShow}
          >
            <div
              className="bg-blue-500 h-full"
              style={{ width: `${book.progress}%` }}
              onClick={handleShow}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col ml-16 mt-4 ">
        <div className="">
        <div
          className="font-bold uppercase text-3xl pb-2"
          style={{ fontSize: "3vw" }}
        >
          <h1>{book.Title}</h1>
        </div>
        <div className="mt-2 flex">
        <div className="flex pr-8">
          <p className="text-sky-400 font-bold pr-3">{book.Author}</p>
          <p className="font-bold">{book.pages}</p>
        </div>
        <div className="flex space-x-1">
                  <button
                    className=""
                    onClick={() => {
                      handleEdit(book);
                      setIsOpen(true);
                    }}
                  >
                    <svg
                      className="fill-slate-600 h-4 w-4 min-w-[1rem]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        className="h-[16px] w-[16px]"
                        d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                      />
                    </svg>
                  </button>
                  <button
                    className=""
                    onClick={() => {
                      handleDelete(book.id);
                      setOpenDelete(true);
                    }}
                  >
                    <svg
                      className="fill-slate-600 w-4 h-4 min-w-[1rem]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        className="w-4 h-4"
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      />
                    </svg>
                  </button>
                </div>
        </div>
        
        </div>
        
        <div className="flex-1 flex font-bold text-stone-200 pr-96 overflow-auto">
          <p>
            {book.description}
          </p>
        </div>
        <div className=" pt-5">
          <div>
            {show && (
              <input
                type="number"
                id="progress"
                name="progress"
                min="0"
                max="100"
                value={book.progress}
                onChange={updateProgress}
                onKeyDown={handleKeyDown}
                className="appearance-none w-24 py-2 px-3 text-gray-700 bg-white border border-gray-400 rounded-md leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          </div>
        </div>
      </div>
    </div>)}
    </div>
    
  );
}

export default Reading;
