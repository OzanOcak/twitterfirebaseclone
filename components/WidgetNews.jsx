function WidgetNews({ article }) {
  return (
    <a href={article.url} target="">
      <div className="flex items-center justify-between px-2 py-2  hover:bg-gray-200 transition duration-200">
        <div className="space-y-0.5">
          <h6>{article.title}</h6>
          <p className="text-xs font-medium text-gray-500">
            {article.source.name}
          </p>
        </div>
        <img
          className="rounded-xl "
          width="70"
          src={article.urlToImage}
          alt=""
        />
      </div>
    </a>
  );
}
export default WidgetNews;
