import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";

function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h>Comment Modal</h>
      {open && <h1>The modal is open</h1>}
    </div>
  );
}
export default CommentModal;
