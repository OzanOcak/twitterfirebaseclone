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
    <div className="hidden sm:flex flex-col p-2  fixed h-full">
      {/** Twitter Logo */}
      <div className="w-[3rem] hoverEffect hover:bg-blue-100">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt=""
        />
      </div>
      {/** Side Menu */}
      <div className="mt-4 mb-2.5  ">
        <SidebarMenuItem text="Home" Icon={HomeIcon} />
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
    </div>
  );
}
export default Sidebar;
