import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
}
export default Post;
