import Image from 'next/image';

import HeaderImage from './header-image';
import { formatDate } from '../../utils/postFunctions';

function PostHeader(props) {
  const { title, image, author, date, readTime } = props;

  const formattedDate = formatDate(date);

  return (
    <header className='mt-10 sm:mt-16'>
      {/* TITLE */}
      <h1 className='font-IBM text-[34px] leading-tight font-bold mb-1 md:text-[43px]'>
        {title}
      </h1>
      <div className='font-IBM text-sm my-6 flex flex-col items-start gap-1 md:text-base'>
        <div className='flex items-center gap-[10px]'>
          {/* IMAGE */}
          <Image src='/images/profile.png' width={25} height={25} />
          {/* AUTHOR */}
          <p className='font-medium text-gray-700 dark:text-gray-200'>
            {author}
          </p>
        </div>
        {/* DATE / READTIME */}
        <span className='text-gray-500 font-medium font-lora dark:text-gray-300'>
          {formattedDate} . {readTime} min read
        </span>
      </div>
      <div className=' mb-[20px]'>
        <HeaderImage imgSrc={image} title={title} />
      </div>
    </header>
  );
}

export default PostHeader;
