import {
  ChartBarIcon,
  DotsHorizontalIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import LikeWidget from "./feedPostWidgets/LikeWidget";
import Moment from "react-moment";
import DeleteWidget from "./feedPostWidgets/DeleteWidget";
import CommentWidget from "./feedPostWidgets/CommentWidget";
import { useRouter } from "next/router";

function FeedPost({ post, id }) {
  const router = useRouter();
  return (
    <div className="flex mx-auto w-full">
      {/** user image */}
      <div className="m-1">
        <img
          alt={post?.data()?.name}
          src={post?.data()?.userImg}
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
              {post?.data()?.name}{" "}
            </span>
            <span className="text-sm sm:text-[13px]">
              @{post?.data()?.userName} -{" "}
            </span>
            <span className="text-sm sm:text-[13px] hover:underline">
              <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
            </span>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>

        {/* post text */}

        <p
          className="text-gray-800 text-[15px] sm:text-[16px] mb-2"
          onClick={() => router.push(`/posts/${id}`)}
        >
          {post?.data()?.text}
        </p>

        {/* post image */}
        <>
          {post?.data()?.image && (
            <div className="rounded-2xl mr-2">
              <img
                alt=""
                src={post?.data()?.image}
                width={500}
                height={300}
                onClick={() => router.push(`/posts/${id}`)}
              />
            </div>
          )}
        </>

        <div className="flex justify-between text-gray-500 p-2">
          <CommentWidget id={id} />
          <DeleteWidget post={post} />
          <LikeWidget id={id} />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
export default FeedPost;
