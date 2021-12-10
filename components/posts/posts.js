import Post from './post';
import { getUniqueId } from '../../utils/postFunctions';

function Posts(props) {
  const { posts, postType } = props;
  return (
    <>
      <h1 className='font-lora font-medium text-xl text-gray-700 capitalize mb-6 border-l-5 pl-[15px] md:text-[23px] border-blue-400 dark:border-dark-text dark:text-gray-300'>
        {postType}
      </h1>
      <div className='space-y-12'>
        {posts.map((post) => (
          <Post post={post} key={getUniqueId(post)} />
        ))}
      </div>
    </>
  );
}

export default Posts;
