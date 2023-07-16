import { ReactNode } from 'react';
import { GrClose } from 'react-icons/gr';
import { twMerge } from 'tailwind-merge';

import useModal from '../../store/modal';

const Modal = ({ body } : { body: ReactNode }) => {
  const { setModal } = useModal();
  
  return (
    <div
      className={twMerge(
        `
        h-screen w-full fixed top-0 left-0 right-0 mx-auto 
        bg-[rgba(0,0,0,0.7)] flex justify-center items-start 
        overflow-y-auto py-10 px-8 pt-[109.6px] z-40
        `
      )}
    >
      <div className='min-w-[560px] h-auto bg-white rounded-md shadow relative z-50'>
        <button className='absolute right-6 top-6' onClick={() => setModal(false)}>
          <GrClose />
        </button>

        <div className='py-4 px-6'>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Modal;
