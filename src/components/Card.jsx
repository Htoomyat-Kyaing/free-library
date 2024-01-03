const Card = ({
  title,
  pageCount,
  publishedAt,
  fileSize,
  image,
  downloadLink,
}) => {
  return (
    <div>
      <div className="shadow-xl card lg:card-side bg-base-100">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title.slice(0, 25)}...</h2>
          <p>
            {pageCount} {publishedAt} {fileSize}
          </p>
          <div className="justify-end card-actions">
            <a className="btn btn-primary" href={downloadLink}>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
