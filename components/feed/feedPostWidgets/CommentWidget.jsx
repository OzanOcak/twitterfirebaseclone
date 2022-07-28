import { ChatIcon } from "@heroicons/react/outline";
import { collection, onSnapshot } from "firebase/firestore";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../../atom/modalAtom";
import { db } from "../../../firebase";

function CommentWidget({ id }) {
  const [comments, setComments] = useState([]);
  const { data: session } = useSession();

  const [open, setOpen] = useRecoilState(modalState);
  const [postIsd, setPostId] = useRecoilState(postIdState);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "comments"),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db]);

  return (
    <div className="flex items-center select-none">
      <ChatIcon
        onClick={() => {
          if (!session) {
            signIn();
          } else {
            setPostId(id);
            setOpen(!open);
          }
        }}
        className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
      />
      {comments.length > 0 && (
        <span className="text-sm">{comments.length}</span>
      )}
    </div>
  );
}
export default CommentWidget;
