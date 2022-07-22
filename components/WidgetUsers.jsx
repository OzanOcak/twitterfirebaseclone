import Image from "next/image";

function WidgetUsers({ randomUser }) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200">
        <Image
          alt=""
          src={randomUser.picture.thumbnail}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="truncate ml-4 leading-5">
          <h4 className="font-bold hover:underline text-[14px] truncate">
            {randomUser.name.first}
          </h4>
          <h5 className="text-[13px] text-gray-500 truncate">
            {randomUser.name.first + " " + randomUser.name.last}
          </h5>
        </div>
      </div>
      <div className="flex justify-center items-center h-2 mt-7 mr-2">
        <button className="text-white bg-sky-600  px-1 rounded-xl">
          follow
        </button>
      </div>
    </div>
  );
}
export default WidgetUsers;
