import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";

function Widgets({ newsResults }) {
  const [numberOfArticles, setNumberOfArticles] = useState(3);
  return (
    <div className="xl:w-[25rem] hidden lg:inline space-y-5 ml-8">
      {/** sticky search */}
      <div className="w-[80%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full relative">
          <SearchIcon className="z-10 h-5 text-gray-500" />
          <input
            type="search"
            placeholder="Search"
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 
            focus:shadow-lg focus:bg-white bg-gray-100"
          />
        </div>
      </div>
      {/** news  */}
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[80%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">{`What's happening?`}</h4>
        {newsResults.slice(0, numberOfArticles).map((article) => (
          <News key={article.id} article={article} />
        ))}
        <div className="mr-1 mb-3">
          <button
            onClick={() => setNumberOfArticles(numberOfArticles + 3)}
            className="text-white bg-sky-300 pl- px-1 py-1 float-right rounded-md hover:bg-sky-500"
          >
            more ...
          </button>
        </div>
      </div>
    </div>
  );
}
export default Widgets;
