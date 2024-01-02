"use client";

import React, { useState } from 'react';
import { SanityDocument } from '@sanity/client';

interface CategoriesProps {
  list: SanityDocument[] | null;
  filterCb: (category?: string) => void;
}

const Categories = ({list, filterCb}: CategoriesProps) => {
  const [filter, setFilter] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    filterCb(category);
    setFilter(category);
  }

  const handleCategoryReset = () => {
    filterCb()
    setFilter(null);
  }
 

  return(
    <>
     <h3>Filter by Category</h3>
     {filter ? (
        <div>
           <p>Showing blog posts in category {filter}.    
            <a className='underline cursor-pointer' onClick={handleCategoryReset}>
              Reset
            </a>
          </p>

        </div>
     ) : (<p>You are currently not filtering posts.</p>)
    
     }
     <div className="flex flex-col space-y-2">
     {list && list.map((category) => (
        <button 
          key={category.title}
          className={`inline-block ${
            filter === category.title
              ? 'bg-[#ff709c] light-text'
              : 'bg-[#175873] hover:bg-[#ff709c] light-text'
          } rounded-xl px-4 py-2 cursor-pointer`}
          onClick={() => handleCategoryChange(category.title)}
        >
          {category.title}
        </button>
      ))}
     </div>
   
    </>
  )
}

export default Categories;