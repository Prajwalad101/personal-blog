import PostContent from '../../components/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../utils/posts-util';

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 86400,
  };
}

export function getStaticPaths() {
  // gets an array of fileNames(markdown)
  const postFilenames = getPostsFiles();

  // removing the extension from the markdown fileName to get the slug
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
