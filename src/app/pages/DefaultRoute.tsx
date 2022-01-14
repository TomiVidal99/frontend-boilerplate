import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const DefaultRoute = (): ReactElement => {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full bg-stone-300">
      <h1 className="text-4xl">Page Not Found 😵‍💫</h1>
      <Link
        className="px-2 py-6 text-lg text-sky-600 md:text-xl lg:text-2xl xl:text-3xl"
        to="/"
      >
        Go Home
      </Link>
    </section>
  );
};

export default DefaultRoute;
