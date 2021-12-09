import Head from 'next/head';

import PostsGrid from '../components/posts/post-grid';
import Heading from '../components/heading';
import { getFeaturedPosts } from '../utils/posts-util';

export default function Home(props) {
  return (
    <div className='container mx-auto px-7 max-w-3xl'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Heading />
      <PostsGrid posts={props.posts} postType='Featured' />
    </div>
  );
}

export function getStaticProps() {
  const allPosts = getFeaturedPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
