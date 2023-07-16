import { SiTransportforlondon } from 'react-icons/si';

const Logo = () => {
  return (
    <h1 className='w-full md:w-auto text-lg uppercase text-sky-600 flex justify-center items-center space-x-2'>
      <SiTransportforlondon size={32} />
      <p>E-Bikes | London</p>
    </h1>
  );
};

export default Logo;
