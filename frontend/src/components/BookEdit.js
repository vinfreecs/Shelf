import { setDoc,doc } from "firebase/firestore"
import { db } from "../firebaseConfig.js"
import React,{useState} from "react";

function BookEdit(props) {
    // console.log("this is the book",props.sendBook.id);
    
    const [book, setBook] = useState(props.sendBook);
    const handleChange = (event) => {
      const { name, value } = event.target;
      setBook((prevNote) => {
        return {
          ...prevNote,
          [name]: value,
        };
      });
    };
    const handleEdit = async() => {
        const docRef =doc(db,"books",props.sendBook.id);
        setDoc(docRef,book)
        handleClose(false);
    }
  
  
    const handleClose = () => {
      props.setIsOpen(false);
    };
  
    return (
      <div className="">
        <div className="mt-auto">
        
        </div>
  
        { (
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
                      placeholder="book_shelf"
                      name="book_shelf"
                      value={book.book_shelf}
                      onChange={handleChange}
                      className="w-full mb-2 px-3 py-2 border text-black border-gray-400 rounded-md"
                    />
                    <input
                      type="number"
                      placeholder="progress"
                      name="progress"
                      value={book.progress}
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
                    onClick={handleEdit}
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
  
  export default BookEdit;
  