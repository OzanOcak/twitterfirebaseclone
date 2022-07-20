import Image from "next/image";
import {
  HomeIcon,
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";
import SidebarMenuItem from "./SidebarMenuItem";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2  fixed h-full ">
      {/** Twitter Logo */}
      <div className="w-[3rem] hoverEffect hover:bg-blue-100 my-5 ">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt=""
        />
      </div>
      {/** Side Menu */}
      <div className="mt-4 mb-2.5  ">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/** button */}

      <button
        className="bg-blue-500 text-white rounded-full h-[2.5rem] font-bold
      shadow-md text-lg hidden hover:shadow-md xl:inline"
      >
        Tweet
      </button>

      {/** mini - profile */}
      <div className="hoverEffect flex justify-center items-center xl:justify-start mt-auto my-5">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/a/a5/Donald_Duck_angry_transparent_background.png"
          width={70}
          height={70}
          alt="d.duck"
          className="rounded-full"
        />
        <div className="leading-5 hidden xl:inline text-gray-700">
          <div className="font-bold">Donald Duck</div>
          <div className="taxr-gray-500">@donaldduck</div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
