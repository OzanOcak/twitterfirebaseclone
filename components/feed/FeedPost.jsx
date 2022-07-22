import Image from "next/image";
import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import LikeWidget from "./LikeWidget";
import Moment from "react-moment";
import DeleteWidget from "./deleteWidget";

function FeedPost({ post }) {
  return (
    <div className="flex mx-auto w-full">
      {/** user image */}
      <div>
        <img
          alt={post.data().name}
          src={post?.data().userImg}
          width={50}
          height={50}
          className="rounded-full mr-3 mt-auto"
        />
      </div>

      {/* right side */}
      <div className="">
        {/* Header */}

        <div className="flex  justify-between">
          {/* post user info */}
          <div className="flex items-end mb-2 space-x-1 whitespace-nowrap">
            <span className="text-sm font-bold sm:text-[18px]">
              {post.data().name}{" "}
            </span>
            <span className="text-sm sm:text-[13px]">
              @{post.data().userName} -{" "}
            </span>
            <span className="text-sm sm:text-[13px] hover:underline">
              <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>

        {/* post text */}

        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.data().text}
        </p>

        {/* post image */}
        <div className="rounded-2xl mr-2">
          <img
            alt={post.data().name}
            src={post.data().image}
            width={500}
            height={300}
          />
        </div>

        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <DeleteWidget post={post} />
          <LikeWidget post={post} />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
export default FeedPost;
