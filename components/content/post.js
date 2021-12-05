function Post(props) {
  const { title, excerpt, date, readTime } = props;
  return (
    <div className='font-IBM'>
      <h1 className='font-semibold mb-3 text-2xl '>{title}</h1>
      <p className='font-IBM text-sm font-medium opacity-70 '>
        November 16, 2021 . {readTime} min read
      </p>
      <p className='font-sans text-base'>{excerpt}</p>
    </div>
  );
}

export default Post;
