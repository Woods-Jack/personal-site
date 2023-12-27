"use client";

import { useRouter } from 'next/router';
import React, {useState} from 'react';
import PostList from "./PostList";
import Categories from "./Categories";
import { SanityDocument } from "next-sanity";
import { client } from '@/sanity/lib/client';
import { postsByCategory, postsQuery } from '@/sanity/lib/queries';

interface PostsProps {
  categories: SanityDocument[];
  initPosts: SanityDocument[];
}

const Posts = ({categories, initPosts}: PostsProps) => {

  const [posts, setPosts] = useState<SanityDocument[]>(initPosts);

  const handleCategoryChange = async(category?:string) => {
    let filteredPosts;
    if(category) {
      const selectedCategory = category;
      filteredPosts = await client.fetch(postsByCategory, { selectedCategory });
    } else {
      filteredPosts = await client.fetch(postsQuery)
    } 
    setPosts(filteredPosts)
  }

  return (
    <div className="flex flex-col-reverse md:flex-row md:space-x-4 space-y-4">
      <div className="md:w-3/4">
        <PostList posts={posts} />
      </div>
      <div className="md:w-1/4">
        <Categories list={categories[0].categories} filterCb={handleCategoryChange}/>
     </div>
    </div>
  )
}

export default Posts;
