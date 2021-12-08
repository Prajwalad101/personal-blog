import Post from './post';
import { getUniqueId } from '../../utils/postFunctions';

function Posts(props) {
  const { posts } = props;
  return (
    <>
      <h1 className='font-lora font-medium text-xl opacity-80 mb-5 border-l-5 pl-[15px] md:text-[23px] border-blue-400'>
        Posts
      </h1>
      <div className='space-y-9'>
        {posts.map((post) => (
          <Post post={post} key={getUniqueId(post)} />
        ))}
      </div>
    </>
  );
}

export default Posts;
