function Post(props) {
  const { title, excerpt, date, readTime } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {date}. {readTime}
      </p>
      <p>{excerpt}</p>
    </div>
  );
}

export default Post;
