import { SparklesIcon } from "@heroicons/react/outline";
import FeedInput from "./FeedInput";
function Feed() {
  return (
    <div className="xl:ml-[23rem] sm:border-l sm:border-r border-gray-200xl:min-w-[36rem] sm:ml-[5rem]  flex-grow max-w-xl">
      <div className="flex justify-between py-0 px-3 top-0 sticky z-10 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl py-[.6rem] font-bold cursor-pointer">
          Home
        </h2>
        <div className="hoverEffect flex items-center justify-center hover:bg-gray-200">
          <SparklesIcon className="h-[1.5rem] sm:h-[2rem]" />
        </div>
      </div>
      <FeedInput />
    </div>
  );
}

export default Feed;
