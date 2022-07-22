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
import { useSession, signIn, signOut } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
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
        {session && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>
      {session ? (
        <>
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
              src={session.user?.image}
              width={70}
              height={70}
              alt={session.user?.image}
              className="rounded-full"
              onClick={signOut}
            />
            <div className="leading-5 hidden xl:inline text-gray-700">
              <div className="font-bold ml-1">{session.user?.name}</div>
              <div className="text-gray-500">@{session.user.username}</div>
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={signIn}
          className="text-white bg-sky-500 py-1 px-1 rounded-full h-[2.5rem] w-[7rem]
         font-bold text-lg hover:shadow-md hidden xl:inline"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
export default Sidebar;
