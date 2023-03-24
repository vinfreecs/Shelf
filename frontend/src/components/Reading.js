import React, { useState } from "react";

function Reading() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

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
    <div className="md:flex flex-collg:flex ml-20 pt-5">
      <div className="flex flex-col items-center h-[60%] w-[30%] m-4">
        <img
          className="rounded-lg h-auto max-h-[500px] max-w-[90vw]"
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905768i/17332218.jpg"
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
              style={{ width: `${progress}%` }}
              onClick={handleShow}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col ml-16 mt-4 ">
        <div
          className="font-bold uppercase text-3xl pb-2"
          style={{ fontSize: "3vw" }}
        >
          <h1>WORDS OF RADIANCE</h1>
        </div>
        <div className="flex pb-6">
          <p className="text-sky-400 font-bold pr-3">Brandon Sanderson</p>
          <p className="font-bold">1200</p>
        </div>
        <div className="flex-1 flex font-bold text-stone-200 pr-96 overflow-auto">
          <p>
            Words of Radiance is an epic fantasy novel written by American
            author Brandon Sanderson and the second book in The Stormlight
            Archive series.[2] The novel was published on March 4, 2014, by Tor
            Books.[3] Words of Radiance consists of one prologue, 89 chapters,
            an epilogue and 14 interludes. It is preceded by The Way of Kings
            and followed by Oathbringer.Words of Radiance consists of one
            prologue, 89 chapters, an epilogue and 14 interludes. It is preceded
            by The Way of Kings and followed by Oathbringer. It is preceded by
            The Way of Kings and followed by Oathbringer.Words of Radiance
            consists of one prologue, 89 chapters, an epilogue and 14
            interludes. It is preceded by The Way of Kings and followed by
            Oathbringer. It is preceded by The Way of Kings and followed by
            Oathbringer.Words of Radiance consists of one prologue, 89 chapters,
            an epilogue and 14 interludes. It is preceded by The Way of Kings
            and followed by Oathbringer. It is preceded by The Way of Kings and
            followed by Oathbringer.Words of Radiance consists of one prologue,
            89 chapters, an epilogue and 14 interludes. It is preceded by The
            Way of Kings and followed by Oathbringer.
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
                value={progress}
                onChange={updateProgress}
                onKeyDown={handleKeyDown}
                className="appearance-none w-24 py-2 px-3 text-gray-700 bg-white border border-gray-400 rounded-md leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reading;
