import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDebounce } from '../hooks/useDebounce';

import Input from './ui/Input';
import useStore from '../store';
import toast from 'react-hot-toast';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const debouncedValue = useDebounce<string>(searchQuery, 500);

  const { data, setSearchForBikeStationsByTheirName, setsAllBikePointLocations } = useStore();

  useEffect(() => {
    if (debouncedValue) {
      setSearchForBikeStationsByTheirName(searchQuery);
      return;
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (Array.isArray(data) && data.length <= 0 || Object.keys(data).length <= 0 || !data && !debouncedValue) {
      toast.error('We haven\'t found anything according to your request');
      setSearchQuery('');
      setsAllBikePointLocations();
      return;
    }
  }, [data]);

  return (
    <div className='w-full md:max-w-xs relative'>
      <Input
        name='search'
        id='search'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='pl-8'
        placeholder='Enter bike stations name'
      />

      <BsSearch className='absolute left-3 top-0 bottom-0 my-auto fill-neutral-400' />
    </div>
  );
};

export default Search;
