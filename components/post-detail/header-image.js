import Image from 'next/image';

function HeaderImage({ imgSrc, title }) {
  if (imgSrc) {
    return (
      <div className="mb-10">
        <Image
          src={imgSrc}
          alt={title}
          width={300}
          height={150}
          layout="responsive"
          className="rounded-md"
        />
      </div>
    );
  } else {
    return <></>;
  }
}

export default HeaderImage;
