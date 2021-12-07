import Post from './post';
import { getUniqueId } from '../../utils/postFunctions';

function Posts(props) {
  const { posts } = props;
  return (
    <>
      <h1 className='font-AlegeryaSans font-medium text-2xl opacity-70 mb-5 border-l-5 pl-3 border-blue-400'>
        Posts
      </h1>
      <div className='space-y-9'>
        {posts.map((post) => (
          <Post
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            readTime={post.readTime}
            key={getUniqueId(post)}
          />
        ))}
      </div>
    </>
  );
}

export default Posts;
