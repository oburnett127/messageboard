
function PostList() {

    let posts = [];
    posts.push({id:1, title:"Post num 1", author:"snowstorm948", content:"This is the content for post 1. I am writing content. I am writing more and more until I can't possibly type anymore."});
    posts.push({id:2, title:"Post num 2", author:"successposter351", content:"This is the content for post 2. I am writing content. I am writing more and more until I can't possibly type anymore."});
    posts.push({id:3, title:"Post num 3", author:"mountainclimber172", content:"This is the content for post 3. I am writing content. I am writing more and more until I can't possibly type anymore."});
    posts.push({id:4, title:"Post num 4", author:"wavesurfer899", content:"This is the content for post 4. I am writing content. I am writing more and more until I can't possibly type anymore."});

    return (
            <div>
                <ul>
                    {posts?.map((post) => (
                        <li key={post.id}>
                                <div>
                                    <h2>{post.title}</h2>
                                    <h2>{post.author}</h2>
                                    {/* <h2>{post.timestamp}</h2> */}
                                    <p>{post.content}</p>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
}

export default PostList;