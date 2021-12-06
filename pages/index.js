import Head from 'next/head';
import Posts from '../components/content/posts';
import Heading from '../components/heading';

export default function Home() {
  return (
    <div className='container mx-auto px-7 max-w-3xl'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Heading />
      <Posts />
    </div>
  );
}
