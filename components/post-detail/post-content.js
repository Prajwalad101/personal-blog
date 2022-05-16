import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import duotoneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import PostHeader from './post-header';

// registering only certain languages to keep the file size down
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;

  // checking if there is an image to render in the post content
  let imagePath;
  if (post.image) {
    // if true create a path to that image
    imagePath = `/images/posts/${post.slug}/${post.image}`;
  } else {
    // if not return the path as undefined to be then checked later
    imagePath = undefined;
  }

  // changing how react markdown renders codeSnippets and images
  const customComponent = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className="my-5">
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width="600"
              height="300"
              className="rounded"
            />
          </div>
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
          PreTag="div"
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
    <article className="container mx-auto px-7 max-w-3xl mb-10">
      <PostHeader
        title={post.title}
        author={post.author}
        date={post.date}
        readTime={post.readTime}
        image={imagePath}
      />
      <ReactMarkdown
        components={customComponent}
        className="post-content font-lora"
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
