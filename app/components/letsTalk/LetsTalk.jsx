import Link from 'next/link';
import React from 'react';

const LetsTalk = () => {
  return (
    <div className="w-full bg-[#0732EF]">
      <div className="w-full px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto py-10">
        <div className="flex gap-4 flex-col md:flex-row items-center justify-between">
          <div className="text-[28px] md:text-[35px] font-semibold text-white leading-tight mb-0 md:mb-0 md:w-[60%] xl:w-[50%]">
            Questions? We will put you on the right path.
          </div>
          <Link href='/contact' className="px-6 py-3 bg-white text-[#7483D4] font-semibold rounded-[10px] h-[50px] w-full md:w-[160px]">
            Lets talk!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
