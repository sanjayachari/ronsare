import React from 'react';

const LetsTalk = () => {
  return (
    <div className="w-full bg-[#343F52] flex flex-col md:flex-row items-center justify-between px-6 md:px-10 xl:px-[120px] py-[40px]">
      <div className="text-[28px] md:text-[35px] font-semibold text-white leading-tight mb-6 md:mb-0 md:w-[60%] xl:w-[50%]">
        Questions? We will put you on the right path.
      </div>
      <button className="px-6 py-3 bg-white text-[#7483D4] font-semibold rounded-[10px] h-[50px] w-full md:w-[160px]">
        Let's talk!
      </button>
    </div>
  );
};

export default LetsTalk;
