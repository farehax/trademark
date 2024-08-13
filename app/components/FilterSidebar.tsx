import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="w-64 bg-white p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="font-medium">Status</h3>
        <div className="flex flex-col space-y-2">
          <label>
            <input type="checkbox" /> Registered
          </label>
          <label>
            <input type="checkbox" /> Pending
          </label>
          <label>
            <input type="checkbox" /> Abandoned
          </label>
          <label>
            <input type="checkbox" /> Others
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Owners</h3>
        <input
          type="text"
          placeholder="Search Owners"
          className="w-full p-2 border rounded-md"
        />
        <div className="mt-2 flex flex-col space-y-2">
          <label>
            <input type="checkbox" /> Meta
          </label>
          <label>
            <input type="checkbox" /> LegalForce RAPC
          </label>
          <label>
            <input type="checkbox" /> SpaceX Inc.
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
