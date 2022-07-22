import { SearchIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import WidgetNews from "./WidgetNews";
import News from "./WidgetNews";
import WidgetUsers from "./WidgetUsers";

function Widgets({ newsResults, randomUsersResults }) {
  const [numberOfArticles, setNumberOfArticles] = useState(3);
  const [numberOfUsers, setNumberOfUsers] = useState(3);
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

      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2  w-[80%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">{`What's happening?`}</h4>
        <AnimatePresence>
          {newsResults.slice(0, numberOfArticles).map((article) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <WidgetNews key={article.id} article={article} />
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="mr-1 mb-3">
          <button
            onClick={() => setNumberOfArticles(numberOfArticles + 3)}
            className="text-sky-400 pl-4 px-1 py-1  rounded-md hover:text-sky-600"
          >
            more ...
          </button>
        </div>
      </div>

      {/** users to follow */}

      <div className="sticky top-[10rem] text-gray-700 space-y-3 rounded-2xl bg-gray-100 pt-2  w-[80%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <AnimatePresence>
          {randomUsersResults.slice(0, numberOfUsers).map((randomUser) => (
            <motion.div
              key={randomUser.login.username}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <WidgetUsers
                key={randomUser.login.username}
                randomUser={randomUser}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="mr-1 ml-3">
          <button
            onClick={() => setNumberOfUsers(numberOfUsers + 3)}
            className="text-sky-400 pl-4 px-1 py1 rounded-full hover:text-sky-600"
          >
            more ...
          </button>
        </div>
      </div>
    </div>
  );
}
export default Widgets;
