import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { db } from "../firebase";

function FeedInput() {
  const { data: session } = useSession();
  const [input, setInput] = useState();
  //console.log(session);
  const filePickerRef = useRef(null);
  const sendPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user?.uid,
      text: input,
      name: session.user?.name,
      email: session.user?.email,
      image: session.user?.image,
    });
    setInput("");
  };

  const addImageToPost = () => {};

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 p-2 space-x-3">
          <div>
            <Image
              alt=""
              src={session.user?.image}
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-2.5">
              <div className="flex">
                <div onClick={() => filePickerRef.current.click()}>
                  <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onClick={addImageToPost}
                  />
                </div>
                <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              </div>
              <div className="mb-1">
                <button
                  onClick={sendPost}
                  disabled={!input?.trim()}
                  className="text-white bg-blue-500 rounded-full px-3 py-.8 disabled:opacity-50"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedInput;
