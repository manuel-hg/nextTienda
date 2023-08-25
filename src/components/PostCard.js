"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PostCard({ post }) {
  const params = useParams();

  return (
    <>
      <div className="bg-gray-950 p-10">
        <Link href={`/posts/${post.id}`}>
          <h3 className="text-xl font-bold mb-4">{post.title}</h3>
        </Link>
        <p className="text-slate-300">{post.body}</p>
        <button
          onClick={() => {
            alert("click");
          }}
        >
          click
        </button>
      </div>
    </>
  );
}
