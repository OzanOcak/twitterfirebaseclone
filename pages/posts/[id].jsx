import { ArrowLeftIcon } from "@heroicons/react/outline";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CommentModal from "../../components/CommentModal";
import FeedPost from "../../components/feed/FeedPost";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";
import { db } from "../../firebase";
import FeedComment from "../../components/feed/FeedComment";

import { AnimatePresence, motion } from "framer-motion";

function PostPage({ newsResults, randomUsersResults }) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();

  const [comments, setComments] = useState([]);

  useEffect(
    () => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),
    [db, id]
  ); // get post data

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]); // fetch comments from firebase

  return (
    <div>
      <Head>
        <title>Post Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen max-w-[88rem] mx-auto">
        <Sidebar />
        <div className="xl:ml-[370px] xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl border-l border-r border-gray-200">
          <div className="flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div
              className="hoverEffect flex justify-center items-center"
              onClick={() => router.push("/")}
            >
              <ArrowLeftIcon className="h-5 " />
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
              Tweet
            </h2>
          </div>
          <FeedPost id={id} post={post} />

          {/*console.log(comments.length)*/}
          {/*console.log(post?.id)*/}
          <AnimatePresence>
            {comments.length > 0 && (
              <motion.div
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {comments.map((comment) => (
                  <FeedComment
                    key={comment.id}
                    id={comment.id}
                    comment={comment.data()}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Widgets
          newsResults={newsResults?.articles}
          randomUsersResults={randomUsersResults?.results}
        />
        <CommentModal />
      </main>
    </div>
  );
}
export default PostPage;

/**  ---------------------------------------------- */

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  // Who to follow section

  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}
