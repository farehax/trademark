"use client";
import React, { useState } from 'react';
import Searchbar from './components/Searchbar';
import FilterSidebar from './components/FilterSidebar';
import SearchResultsTable from './components/SearchResultsTable';

const HomePage = () => {
  const [results, setResults] = useState([]);

  // Function to handle search and filter logic can be added here

  return (
    <div className="min-h-screen bg-gray-100">
      <Searchbar />
      <div className="flex">
        <FilterSidebar />
        <SearchResultsTable results={results} />
      </div>
    </div>
  );
};

export default HomePage;
