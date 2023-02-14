import clsx from "clsx";
import { useEffect, useState } from "react";

import Modal from "./CelebrationModal";

const COLS = 4;
const ROWS = 4;

const images = [
  "./cat-please.gif",
  "./gato-con-botas.gif",
  "./bob.gif",
  "./do-not-resist.gif",
  "./come-on.gif",
];

const getRandomCoords = () => {
  let col = Math.ceil(Math.random() * COLS);
  let row = Math.ceil(Math.random() * ROWS);
  return { col, row };
};

export default function LoveU() {
  const [coord, setCoord] = useState([5, 3]);
  const [tries, setTries] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onTryDenail = () => {
    let { col, row } = getRandomCoords();

    while (col == coord[0] || row == coord[1] || row == 2) {
      const newCoords = getRandomCoords();
      col = newCoords.col;
      row = newCoords.row;
    }

    setCoord([col, row]);
    setTries(tries + 1);
  };

  useEffect(() => {
    if (tries % 6 == 0 && tries != 0) {
      if (!showImage) {
        const nextImage =
          image >= images.length - 1 ? 0 : tries != 6 ? image + 1 : 0;
        setImage(nextImage);
        setShowImage(true);
        setTimeout(() => setShowImage(false), 4000);
      }
    }
  }, [tries]);

  return (
    <>
      {showModal && <Modal />}
      <main
        className={clsx(
          "bg-black",
          "h-screen w-screen",
          "grid grid-cols-4 grid-rows-4",
          "p-5"
        )}
      >
        <h1
          className={clsx(
            "row-start-2 col-start-1 col-end-5",
            "text-5xl md:text-8xl text-center font-extrabold",
            "flex justify-center items-center",
            "bg-gradient-to-tr from-red-600 via-fuchsia-500 to-rose-500",
            "animate-gradient-y",
            "bg-clip-text text-transparent"
          )}
        >
          ¿Quieres ser mi novia?
        </h1>
        <div
          className={clsx(
            "h-20 my-auto mx-2 md:mx-4",
            "flex justify-center items-center",
            "border-[3px] border-purple-500 rounded-2xl",
            "text-purple-500 font-bold text-2xl",
            "row-start-3 col-start-2",
            "cursor-pointer"
          )}
          onClick={() => setShowModal(true)}
        >
          SI
        </div>
        <div
          className={clsx(
            "h-20 my-auto mx-2 md:mx-4",
            "flex justify-center items-center",
            "border-[3px] border-red-500 rounded-2xl",
            "text-red-500 font-bold text-2xl",
            "cursor-pointer",
            tries == 0
              ? "row-start-3 col-start-3"
              : `row-start-${coord[1]} col-start-${coord[0]}`,
            "z-10",
            "transition-all duration-100"
          )}
          onMouseOver={onTryDenail}
          onClick={onTryDenail}
        >
          NO
        </div>
        <div
          className={clsx(
            "flex justify-center",
            "row-start-1 row-span-1 col-start-1 col-span-4",
            "md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-5"
          )}
        >
          <img
            src={images[image]}
            alt="do not resist"
            className={clsx("rounded-3xl", { hidden: !showImage })}
          />
        </div>

        <footer className="row-start-4 col-start-1 col-span-12 flex justify-center items-end text-white/10">
          <a
            className="cursor-pointer"
            href="https://kodemia.mx"
            target="_blank"
            rel="noopener"
          >
            Hecho con 🤍 por kodemia
          </a>
        </footer>
      </main>
    </>
  );
}
