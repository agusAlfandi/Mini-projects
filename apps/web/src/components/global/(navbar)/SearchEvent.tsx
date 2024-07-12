'use client';

import { getByCategory, getByLokasi } from '@/api/event';
import { useState } from 'react';
import SearchResult from './SearchResult';

const SearchEvent = () => {
  const [data, setData] = useState('');
  const [res, setRes] = useState([]);

  const handelSearchLocation = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('search', data);

    const res = await getByLokasi(formData);
    setRes(res.event);
  };

  const handelSearchCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('search', data);

    const res = await getByCategory(formData);
    setRes(res.event);
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-ghost btn-circle"
        onClick={() => {
          const modal = document.getElementById(
            'my_modal_4',
          ) as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Search</h3>
          <div className="form-control mt-4">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="input input-bordered w-24 h-10 md:w-auto"
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <div className="flex gap-4">
                <button className="btn" onClick={handelSearchLocation}>
                  Search By Lokasi
                </button>
                <button className="btn" onClick={handelSearchCategory}>
                  Search By Kategori
                </button>
                <button className="btn">Close</button>
              </div>
            </form>
          </div>
          <div>
            <SearchResult result={res} />
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default SearchEvent;
