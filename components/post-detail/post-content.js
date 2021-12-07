import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import dummyData from '../../utils/dummy-data';

function PostContent() {
  const dummyPost = dummyData[0];
  const imagePath = `/images/posts/${dummyPost.slug}/${dummyPost.image}`;
  return (
    <article>
      <PostHeader title={dummyPost.title} image={imagePath} />
      <ReactMarkdown>{dummyPost.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
