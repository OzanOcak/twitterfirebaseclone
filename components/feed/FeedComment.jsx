import {
  ChartBarIcon,
  DotsHorizontalIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import LikeWidget from "./feedPostWidgets/LikeWidget";
import Moment from "react-moment";
import DeleteWidget from "./feedPostWidgets/DeleteWidget";
import CommentWidget from "./feedPostWidgets/CommentWidget";

function FeedComment({ comment, id }) {
  return (
    <div className="flex mx-auto ml-[3.7rem] mr-[1.7rem] border-b my-4">
      {/** user image */}
      <div>
        <img
          alt={comment.name}
          src={comment.userName}
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
              {comment?.name}{" "}
            </span>
            <span className="text-sm sm:text-[13px]">@{comment?.name} - </span>
            <span className="text-sm sm:text-[13px] hover:underline">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>

        {/* post text */}

        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {comment?.comment}
        </p>
      </div>
    </div>
  );
}
export default FeedComment;
