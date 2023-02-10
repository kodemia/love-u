import clsx from "clsx";
import { useEffect, useState } from "react";

import Modal from "./CelebrationModal";

const images = [
  "./cat-please.gif",
  "./gato-con-botas.gif",
  "./bob.gif",
  "./do-not-resist.gif",
  "./come-on.gif",
];

export default function LoveU() {
  const [coord, setCoord] = useState([8, 4]);
  const [tries, setTries] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onTryDenail = () => {
    let col = Math.ceil(Math.random() * 9);
    let row = Math.ceil(Math.random() * 5);

    if (
      row == 3 ||
      (col == 4 && row == 5) ||
      (col == coord[0] && row == coord[1])
    ) {
      col += 1;
      row += 1;
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
          "grid grid-cols-12 grid-rows-6",
          "p-5"
        )}
      >
        <h1
          className={clsx(
            "row-start-3 col-start-1 col-end-13",
            "text-8xl text-center font-extrabold",
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
            "h-20 my-auto",
            "flex justify-center items-center",
            "border-[3px] border-purple-500 rounded-2xl",
            "text-purple-500 font-bold text-2xl",
            "row-start-4 col-start-5",
            "cursor-pointer"
          )}
          onClick={() => setShowModal(true)}
        >
          SI
        </div>
        <div
          className={clsx(
            "h-20 my-auto",
            "flex justify-center items-center",
            "border-[3px] border-red-500 rounded-2xl",
            "text-red-500 font-bold text-2xl",
            "cursor-pointer",
            tries == 0
              ? "row-start-4 col-start-8"
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
            "row-start-1 row-span-2 col-start-4 col-span-6"
          )}
        >
          <img
            src={images[image]}
            alt="do not resist"
            className={clsx("rounded-3xl", { hidden: !showImage })}
          />
        </div>
        <footer className="row-start-6 col-start-1 col-span-12 flex justify-center items-end text-white/10">
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
