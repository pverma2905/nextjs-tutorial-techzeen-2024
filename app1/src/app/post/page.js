import MyPost from "./mypost";

async function getPost() {
    let postData = await fetch('https://jsonplaceholder.typicode.com/posts')
    postData = await postData.json();
    return postData;
}



const Post = async () => {
    let posts = await getPost();
    console.log(posts)
    return (
        <>
            <h2>Posts|Fetch data With API In Server Side Component</h2>
            {
                posts.map((post) =>
                    <>
                        <h4 key={post.id}>#{post.id})Post Title: {post.title}</h4>
                        <MyPost data={post.id}/>
                    </>
                )
            }
        </>
    )

}

export default Post