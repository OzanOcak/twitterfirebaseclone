import { SearchIcon } from "@heroicons/react/outline";

function Widgets() {
  return (
    <div className="xl:w-[25rem] hidden lg:inline space-y-5 ml-8">
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
    </div>
  );
}
export default Widgets;
