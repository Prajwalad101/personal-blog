import Image from 'next/image';

function HeaderImage({ imgSrc, title }) {
  if (imgSrc) {
    return (
      <Image
        src={imgSrc}
        alt={title}
        width={300}
        height={150}
        layout='responsive'
        className='rounded-md'
      />
    );
  } else {
    return <></>;
  }
}

export default HeaderImage;
