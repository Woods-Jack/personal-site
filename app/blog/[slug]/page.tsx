import { SanityDocument } from "@sanity/client";
import Post from "@/components/common/Posts/Post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);
  if(posts.length > 0) posts[0].params.slug = `blog/${posts[0]?.params?.slug}`;

  return posts;
}

export default async function Page({ params }: { params?: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  return(
  <main className="mx-4 pt-24 mb-16">
       <article className='max-w-[1024px] flex flex-col gap-4 md:mx-auto justify-center'>
     {post ? <Post post={post} /> : <><h1>Page Not Found</h1><div>The page you are looking for doesn&apos;t exist...</div></>}
     </article>
  </main>
  )
}