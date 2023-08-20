async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function PostPages() {
  const posts = await loadPost();
  console.log(posts);
  return (<div>
            <p>Posts2</p>
            {
                /*posts.map(post => {
                    <>
                    <h1>hola</h1>
                    <div key={post.userId}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    </>
                })*/

            }
        </div>);
}

export default PostPages;
