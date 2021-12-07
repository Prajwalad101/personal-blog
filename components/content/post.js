import Link from 'next/link';
import { FiCoffee } from 'react-icons/fi';

function Post(props) {
  const { title, excerpt, date, readTime, slug } = props.post;

  const linkPath = `/posts/${slug}`;
  console.log(linkPath);

  return (
    <div className='font-IBM '>
      <Link href={linkPath}>
        <a>
          <h1 className='font-extrabold mb-3 text-2xl '>{title}</h1>
          <div className='flex gap-3 items-center'>
            {' '}
            <span className='font-IBM text-sm font-medium opacity-70 '>
              November 16, 2021 . {readTime} min read
            </span>
            <span className='text-gray-500'>
              <FiCoffee size={18} />
            </span>
          </div>
          <p className='font-AlegreyaSans text-excerpt'>{excerpt}</p>
        </a>
      </Link>
    </div>
  );
}

export default Post;
