import clsx from "clsx";

export default function Modal() {
  return (
    <section
      className={clsx(
        "h-screen w-screen",
        "bg-pink-500/20",
        "absolute top-0 left-0 right-0",
        "flex justify-center items-center"
      )}
    >
      <main
        className={clsx(
          "bg-rose-500",
          "h-fit w-fit py-10 px-14",
          "z-20",
          "flex justify-center items-center flex-col",
          "text-white",
          "rounded-2xl",
          "border-2 border-purple-600"
        )}
      >
        <p className="text-4xl mb-10">🎉 Yo sabía que aceptarías 🎉</p>
        <img
          src="./carlton.gif"
          alt="yeah dance"
          className={clsx("rounded-xl", "h-[20vh]", "mb-10")}
        />
        <p className="text-2xl">🖤 ¡Feliz dia del amor y la amistad! 🖤</p>
        <p
          className="mt-20 text-sm text-white/40 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Volver a comenzar
        </p>
      </main>
    </section>
  );
}
