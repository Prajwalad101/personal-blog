import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponent = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <Image
            src={`/images/posts/${post.slug}/${image.properties.src}`}
            alt={image.properties.alt}
            width='600'
            height='300'
          />
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code({ node, inline, className, ...props }) {
      // Set code language declared in code block: ```lang
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={duotoneDark}
          language={match[1]}
          PreTag='div'
          // className='codeStyle'
          showLineNumbers={true}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <article>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponent}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
