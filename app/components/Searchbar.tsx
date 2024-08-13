 "use client"
 import React from 'react';

 const Searchbar = () => {
   return (
     <div className="flex justify-between items-center p-4 bg-white shadow-md">
       <input
         type="text"
         placeholder="Search Trademark Here eg. Mickey Mouse"
         className="w-full p-2 border rounded-md"
       />
       <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">
         Search
       </button>
     </div>
   );
 };
 
 export default Searchbar;
 