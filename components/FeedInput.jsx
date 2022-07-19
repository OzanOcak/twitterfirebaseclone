import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";

function FeedInput() {
  return (
    <div className="flex border-b border-gray-200 p-2 space-x-3">
      <div>
        <Image
          alt=""
          src="https://upload.wikimedia.org/wikipedia/en/a/a5/Donald_Duck_angry_transparent_background.png"
          width={50}
          height={50}
          className="rounded-full cursor-pointer hover:brightness-90"
        />
      </div>
      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            placeholder="What's happening?"
            rows="2"
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
          ></textarea>
        </div>

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <div className="mb-1">
            <button className="text-white bg-blue-500 rounded-full px-3 py-.8">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedInput;
