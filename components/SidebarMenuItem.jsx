function SidebarMenuItems({ Icon, text, active }) {
  return (
    <div className="flex justify-start items-center hoverEffect h-[2.3rem] w-[9.8rem] text-gray-700 p-1 mb-3.5 xl:text-lg space-x-2 xl:mb-4 ">
      <Icon className="h-[1.7rem] mr-1" />
      <div className={`${active && "font-bold"} hidden xl:inline`}>{text}</div>
    </div>
  );
}

export default SidebarMenuItems;
