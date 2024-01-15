// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <section className="flex items-center h-full p-16 text-gray-800 bg-gray-50 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-gray-400 text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
}
