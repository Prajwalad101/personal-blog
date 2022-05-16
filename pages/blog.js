import Head from 'next/head';

import Blog from '../components/blog/blog';
import { getAllPosts } from '../utils/posts-util';

function BlogPage(props) {
  return (
    <>
      <Head>
        <title>Blog - Prajwal Adhikari</title>
      </Head>
      <Blog posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default BlogPage;
