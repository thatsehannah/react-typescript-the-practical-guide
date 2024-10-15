import { useEffect, useState } from 'react';
import { get } from './util/http';
import { BlogPost } from './types/BlogPost';
import BlogPosts from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const App = () => {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = (await get(
        'https://jsonplaceholder.typicode.com/posts'
      )) as RawDataBlogPost[];

      //Transforming raw data to blog post type
      const blogPosts: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });

      setFetchedPosts(blogPosts);
    };

    fetchPosts();
  }, []);
  return (
    <main>
      <img
        src={fetchingImg}
        alt='fetching image'
      />
      <BlogPosts posts={fetchedPosts} />
    </main>
  );
};

export default App;
