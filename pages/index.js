import Head from 'next/head';
import Posts from '../components/content/posts';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Posts />
    </div>
  );
}
