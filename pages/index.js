import Head from 'next/head';
import Posts from '../components/content/posts';
import Heading from '../components/heading';
import { getAllPosts } from '../utils/posts-util';

export default function Home(props) {
  return (
    <div className='container mx-auto px-7 max-w-3xl'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Heading />
      <Posts posts={props.posts} />
    </div>
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
