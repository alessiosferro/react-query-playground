import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const posts = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return posts.data;
};

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Posts = () => {
  const { data: posts } = useQuery<IPost[]>("posts", fetchPosts, {
    staleTime: Infinity,
  });

  if (!posts) return null;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
