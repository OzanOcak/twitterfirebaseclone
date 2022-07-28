import { SparklesIcon } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import { db } from "../../firebase";
import FeedInput from "./FeedInput";
import FeedPost from "./FeedPost";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div className="xl:ml-[23rem] sm:border-l sm:border-r border-gray-200 md:min-w-[30rem] lg:min-w-[36rem] xl:min-w-[36rem] sm:ml-[5rem]  flex-grow max-w-xl">
      <div className="flex justify-between py-0 px-3 top-0 sticky z-10 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl py-[.6rem] font-bold cursor-pointer">
          Home
        </h2>
        <div className="hoverEffect flex items-center justify-center hover:bg-gray-200">
          <SparklesIcon className="h-[1.5rem] sm:h-[2rem]" />
        </div>
      </div>
      <FeedInput />
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <FeedPost key={post.id} id={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Feed;
