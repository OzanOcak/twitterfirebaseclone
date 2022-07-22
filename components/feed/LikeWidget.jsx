import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { db } from "../../firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

function LikeWidget({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.data().id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setIsLiked(likes.findIndex((like) => like.id === session?.user.uid) !== -1);
  }, [likes]);

  async function likePost() {
    if (session) {
      if (isLiked) {
        await deleteDoc(
          doc(db, "posts", post.data().id, "likes", session?.user.uid)
        );
      } else {
        await setDoc(
          doc(db, "posts", post.data().id, "likes", session?.user.uid),
          {
            username: session.user.username,
          }
        );
      }
    } else {
      signIn();
    }
  }

  return (
    <div className="flex items-center">
      {isLiked ? (
        <HeartIconFilled
          onClick={likePost}
          className="h-9 w-9  text-red-600 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
        />
      ) : (
        <HeartIcon
          onClick={likePost}
          className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
        />
      )}
      {likes.length > 0 && (
        <span className={`${isLiked && "text-red-600"} text-sm select-none`}>
          {" "}
          {likes.length}
        </span>
      )}
    </div>
  );
}
export default LikeWidget;
