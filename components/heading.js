import Image from "next/image";

function Heading() {
  return (
    <div className="mt-14 mb-20 flex flex-col sm:flex-row-reverse items-start justify-between sm:mt-20 sm:gap-16">
      <div className="w-[90px] sm:w-[120px] mb-6">
        <Image
          src="/images/profile.png"
          width={0}
          height={0}
          layout="responsive"
        />
      </div>
      <div className="sm:pr-12 sm:w-10/12">
        <span className="opacity-70 text-heading2 font-firaCode font-medium md:text-[17px]">
          Personal Blog by
        </span>
        <h1 className="font-Poppins font-extrabold text-3xl md:text-[40px] md:pt-1 ">
          Prajwal Adhikari
        </h1>
        <p className="font-Poppins font-normal text-heading2 my-5 md:text-[17px]">
          On Javascript, React, NextJs, Tailwind and new ways to confuse myself
        </p>
      </div>
    </div>
  );
}

export default Heading;
