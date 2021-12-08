import Link from 'next/link';
import { FiCoffee } from 'react-icons/fi';

function Post(props) {
  const { title, excerpt, date, readTime, slug } = props.post;

  const linkPath = `/posts/${slug}`;
  return (
    <div>
      <Link href={linkPath}>
        <a>
          {/* Title */}
          <h1 className='font-IBM font-black mb-3 text-2xl '>{title}</h1>
          {/* Date */}
          <p className='font-firaCode text-sm font-medium text-gray-600 mb-1'>
            November 16, 2021 . {readTime} min read
          </p>
          {/* Excerpt */}
          <p className='font-lora font-medium text-lg'>{excerpt}</p>
        </a>
      </Link>
    </div>
  );
}

export default Post;
