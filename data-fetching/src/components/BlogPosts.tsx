import { BlogPost } from '../types/BlogPost';

type BlogPostsProps = {
  posts: BlogPost[];
};

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div id='blog-posts'>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
