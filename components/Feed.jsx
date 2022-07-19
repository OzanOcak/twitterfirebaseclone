import { SparklesIcon } from "@heroicons/react/outline";
import FeedInput from "./FeedInput";
import FeedPost from "./FeedPost";
function Feed() {
  const posts = [
    {
      id: "1",
      name: "Donald Duck",
      username: "donaldduck",
      userImg:
        "https://upload.wikimedia.org/wikipedia/en/a/a5/Donald_Duck_angry_transparent_background.png",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Donald Duck",
      username: "donaldduck",
      userImg:
        "https://upload.wikimedia.org/wikipedia/en/a/a5/Donald_Duck_angry_transparent_background.png",
      img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      text: "wow!",
      timestamp: "2 days ago",
    },
  ];
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
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
