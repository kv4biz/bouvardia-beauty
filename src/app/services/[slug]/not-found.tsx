import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <section className="py-10 lg:py-28 text-center">
      <div className="container mx-auto py-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="text-lg  mt-4">
          The service you are looking for does not exist or has been removed.
        </p>
        <Link href="/">
          <p className="mt-6 px-6 py-2 bg-black text-white rounded-lg">
            Go Back to home
          </p>
        </Link>
      </div>
    </section>
  );
};

export default notFound;
