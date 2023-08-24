import { PostCard } from "@/components";
import "./posts.css";
//peticion

async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
}

//renderiza
async function PostPages() {
  const posts = await loadPost();
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPages;
