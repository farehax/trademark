import React from 'react';

// Define the interface for the result
interface Result {
  logo: string;
  details: string;
  status: string;
  statusColor: string;
  description: string;
}

interface SearchResultsTableProps {
  results: Result[];
}

const SearchResultsTable: React.FC<SearchResultsTableProps> = ({ results }) => {
  return (
    <div className="flex-1 bg-white p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">Search Results</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Details</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="border-b">
              <td>
                <img src={result.logo} alt="Trademark Logo" className="w-16 h-16" />
              </td>
              <td>{result.details}</td>
              <td className={`text-${result.statusColor}-500`}>
                {result.status}
              </td>
              <td>{result.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultsTable;
