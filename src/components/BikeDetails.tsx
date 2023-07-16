import { Response } from '../api/response.types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import bike from '../../public/images/bicycle.png';
import useDateTime from '../hooks/useDateTime';

const BikeDetails = ({ data } : { data: Response }) => {
  const [expandedHistory, setExpandedHistory] = useState<boolean>(false);

  const dateTime = useDateTime();

  return (
    <div>
      <div className='flex items-center space-x-2 border-b border-neutral-300 pb-4'>
        <img src={bike} alt="bike" height={24} width={24} loading='lazy' />
        <h3 className='text-xl'>{data.placeType}</h3>
      </div>

      <div className='mt-4'>
        <h4 className='text-lg'>Details</h4>

        <div className='mt-2'>
          <p>Place type: {data.placeType}</p>
          <p>Address: {data.commonName}</p>
          <p>lat: {data.lat}</p>
          <p>lon: {data.lon}</p>
        </div>
      </div>

      {data.additionalProperties.length > 0 && (
        <div className='mt-4'>
          <div className='flex justify-between items-center'>
            <h4 className='text-lg'>History</h4>
            <button
              className={twMerge(
                `
                flex justify-center items-center text-sm border-0 
                rounded-md bg-sky-400 transition-colors delay-75 
                hover:bg-sky-600 text-white uppercase py-2 px-6
                `
              )}
              onClick={() => setExpandedHistory(!expandedHistory)}
            >
              {expandedHistory ? 'Less' : 'More'}
            </button>
          </div>

          <div
            className={twMerge(
              'mt-2 flex flex-col gap-y-2 border border-neutral-300 rounded-md p-2',
              expandedHistory ? 'max-h-auto' : 'max-h-[200px] relative overflow-y-auto'
            )}
          >
            {data.additionalProperties.map((property, index) => (
              <div key={index}>
                <p>Key: {property.key}</p>
                <p>Value: {property.value}</p>
                <p>Date/Time: {dateTime(property.modified)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BikeDetails;
