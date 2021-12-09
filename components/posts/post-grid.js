import Posts from './posts';

function PostsGrid(props) {
  const { posts, postType } = props;
  return <Posts posts={posts} postType={postType} />;
}

export default PostsGrid;
