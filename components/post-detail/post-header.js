import Image from 'next/image';

import HeaderImage from './header-image';
import { formatDate } from '../../utils/postFunctions';

function PostHeader(props) {
  const { title, image, author, date, readTime } = props;

  const formattedDate = formatDate(date);

  return (
    <header className='mt-10 sm:mt-16'>
      <h1 className='font-IBM text-[27px] leading-9 font-bold mb-1 md:text-[37px]'>
        {title}
      </h1>
      <div className='font-IBM text-sm my-6 flex flex-col items-start gap-1 md:text-base'>
        <div className='flex items-center gap-[10px]'>
          <Image src='/images/profile.png' width={25} height={25} />
          <p>{author}</p>
        </div>
        <span>
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
