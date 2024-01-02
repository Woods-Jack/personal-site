import { SanityDocument } from "@sanity/types";
import Posts from "@/components/common/Posts/Posts";
import { postsQuery, categoriesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

const BlogPage = async () => {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const categories = await sanityFetch<SanityDocument[]>({ query: categoriesQuery })
  console.log('CAT', categories)
  return(
    <main className="pt-24">
      <div className='max-w-[1200px] flex flex-col md:mx-auto mx-4 justify-center'>
        <h1>Welcome to my Blog</h1>
        <h2>Have a look at some of my latest posts...</h2>
        <Posts categories={categories} initPosts={posts} />
      </div>
    </main>
  )
}

export default BlogPage;
export const revalidate = 60;