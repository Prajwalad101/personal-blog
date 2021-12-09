import PostsGrid from '../posts/post-grid';

function Blog(props) {
  return (
    <div className='container mx-auto px-7 max-w-3xl my-16'>
      <PostsGrid posts={props.posts} postType='blog' />
    </div>
  );
}

export default Blog;
