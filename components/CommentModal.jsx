import { modalState, postIdState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/outline";

function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-lg w-[90%] h-[20rem] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-1 border-gray-200  rounded-xl shadow-md"
        >
          <div className="p-1">
            <div className="border-b border-gray-200 py-2 px-1">
              <div
                className="hoverEffect w-[1.8rem] flex justify-center items-center"
                onClick={() => setOpen(false)}
              >
                <XIcon className="h-[1.6rem] text-gray-700"></XIcon>
              </div>
            </div>
            <h1>{postId}</h1>
          </div>
        </Modal>
      )}
    </div>
  );
}
export default CommentModal;
