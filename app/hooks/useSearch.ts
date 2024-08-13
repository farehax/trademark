"use client";

// import { useState } from 'react';

// interface SearchResult {
//   id: string;
//   name: string;
//   logo: string;
//   details: string;
//   statusColor: string;
// }

// const useSearch = () => {
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchResults = async (query: string, filters?: any) => {
//     setLoading(true);
//     setError(null);

//     try {
//       // Simulate API call with a delay
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Example results
//       const fetchedResults: SearchResult[] = [
//         {
//           id: '1',
//           name: 'Trademark 1',
//           logo: 'https://via.placeholder.com/150',
//           details: 'Details about Trademark 1',
//           statusColor: 'green',
//         },
//         {
//           id: '2',
//           name: 'Trademark 2',
//           logo: 'https://via.placeholder.com/150',
//           details: 'Details about Trademark 2',
//           statusColor: 'red',
//         },
//       ];

//       setResults(fetchedResults);
//     } catch (err) {
//       setError("Error fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     results,
//     fetchResults,
//     loading,
//     error,
//   };
// };

// export default useSearch;
