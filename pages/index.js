import Head from 'next/head';

import PostsGrid from '../components/posts/post-grid';
import Heading from '../components/heading';
import { getFeaturedPosts } from '../utils/posts-util';

export default function Home(props) {
  return (
    <div className="container mx-auto px-7 max-w-3xl">
      <Head>
        <title>Prajwal Adhikari - Full stack developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <PostsGrid posts={props.posts} postType="Featured" />
      <div className="mt-20 mb-5 font-ibm text-gray-600 dark:text-gray-400">
        © 2022-present Prajwal Adhikari. All rights reserved
      </div>
    </div>
  );
}

export function getStaticProps() {
  // gets an array containing the featured posts
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
