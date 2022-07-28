import { TrashIcon } from "@heroicons/react/outline";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useSession } from "next-auth/react";
import { db, storage } from "../../../firebase";

function DeleteWidget({ post }) {
  const { data: session } = useSession();
  async function deletePost() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteDoc(doc(db, "posts", post.id));
      if (post.data().image) {
        deleteObject(ref(storage, `posts/${post.id}/image`));
      }
    }
  }
  return (
    <>
      {session?.user.uid === post?.data().id && (
        <TrashIcon
          onClick={deletePost}
          className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
        />
      )}
    </>
  );
}
export default DeleteWidget;
