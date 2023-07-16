import Logo from './Logo';
import Search from './Search';

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full px-5 bg-white shadow z-10'>
      <div className='max-w-screen-xl mx-auto flex flex-wrap justify-between gap-4 items-center py-4'>
        <Logo />
        <Search />
      </div>
    </header>
  );
};

export default Header;
