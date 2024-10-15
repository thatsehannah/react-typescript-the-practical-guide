import { ReactNode, useEffect, useState } from 'react';
import { z } from 'zod';
import { get } from './util/http';
import { BlogPost } from './types/BlogPost';
import BlogPosts from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

//Creating a schema for the data that's coming back from the API
const rawDataBlogPostSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string(),
});

const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

const App = () => {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      try {
        const data = await get('https://jsonplaceholder.typicode.com/posts');
        const parsedData = expectedResponseDataSchema.parse(data); //will be the type set up in rawDataBlogPostSchema

        //Transforming raw data to blog post type
        const blogPosts: BlogPost[] = parsedData.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });
        setFetchedPosts(blogPosts);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }

      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id='loading-fallback'>Fetching posts...</p>;
  }

  return (
    <main>
      <img
        src={fetchingImg}
        alt='fetching image'
      />
      {content}
    </main>
  );
};

export default App;
