import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSort, setRating, setFastDelivery, clearFilters } from '../redux/FilterSlice';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const { sort, rating, fastDelivery } = useSelector((state: RootState) => state.filters);

  return (
    <div className="flex rounded-lg bg-gray-300 text-gray-800 w-[270px] h-screen flex-col items-start justify-start p-4 border-r">
      <h2 className="text-xl font-bold bg-white px-4 py-2 rounded-lg">Filter Products</h2>
      <div className='flex flex-col bg-white rounded-lg px-5 py-2 items-start justify-start mt-2 gap-2'>
        <label className='text-xl'>
          <input
            type="radio"
            name="sort"
            className='mr-2'
            checked={sort === 'asc'}
            onChange={() => dispatch(setSort('asc'))}
          />
          Ascending
        </label>
        <label className='text-xl'>
          <input
            type="radio"
            name="sort"
            className='mr-2'
            checked={sort === 'desc'}
            onChange={() => dispatch(setSort('desc'))}
          />
          Descending
        </label>
      </div>
      <div className='flex mt-2 gap-1 text-xl bg-white rounded-lg px-5 py-2'>
        <input
          type="checkbox"
          checked={fastDelivery}
          onChange={() => dispatch(setFastDelivery())} 
        />
        Fast Delivery Only
      </div>
      <div className='flex mt-4 text-xl items-start justify-start bg-white rounded-lg px-5 py-2'>
        <span>Rating: <p className='hidden'>{rating}</p> </span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => dispatch(setRating(star))}>
            <p className='hidden'>{star}</p>  ⭐
          </button>
        ))}
      </div>
      <button className='mt-4 rounded-lg bg-gray-500 hover:text-gray-200 hover:bg-gray-600 px-4 py-2 text-white' onClick={() => dispatch(clearFilters())}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
