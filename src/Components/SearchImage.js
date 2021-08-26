import React from "react";

export const SearchImage = ({ setTerm }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form class="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
        <div class="flex items-center border-b border-purple-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            class="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
