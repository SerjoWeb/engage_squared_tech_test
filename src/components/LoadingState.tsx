import { BounceLoader } from 'react-spinners';

const LoadingState = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <BounceLoader color='#0284c7' size={40} />
    </div>
  );
};

export default LoadingState;
