import { Link } from "react-router-dom";

const Card = ({ title, pageCount, publishedAt, fileSize, image, id, tags }) => {
  return (
    <Link
      to={`/books/${id}`}
      state={{
        id: id,
        title: title,
        image: image,
        pageCount: pageCount,
        publishedAt: publishedAt,
        fileSize: fileSize,
        tags: tags,
      }}
    >
      <div className="flex items-center h-full gap-5 p-5 rounded-lg shadow-xl min-h-40 md:flex-col hover:bg-violet-600">
        <figure className="flex min-w-max">
          <img className="w-20 h-28 md:w-40 md:h-48 object-fit" src={image} />
        </figure>
        <div className="flex flex-col justify-between h-full gap-5">
          <h2 className="text-xl font-bold text-center">
            {title.slice(0, 20)} ...
          </h2>
          <p className="text-center">
            {pageCount} | {publishedAt} | {fileSize}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
