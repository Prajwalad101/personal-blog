import PostHeader from './post-header';
import dummyData from '../../utils/dummy-data';

function PostContent() {
  const imagePath = `/images/posts/${dummyData[0].slug}/${dummyData[0].image}`;
  return (
    <article>
      <PostHeader title={dummyData[0].title} image={imagePath} />
      CONTENT
    </article>
  );
}

export default PostContent;
