import Post from './post';
import dummyData from '../../utils/dummy-data';
import { getUniqueId } from '../../utils/postFunctions';

function Posts() {
  return (
    <div>
      {dummyData.map((post) => (
        <Post
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          readTime={post.readTime}
          key={getUniqueId(post)}
        />
      ))}
    </div>
  );
}

export default Posts;
