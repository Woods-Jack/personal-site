import { SanityDocument } from "@sanity/client";
import Post from "@/components/common/Posts/Post";
import { postQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function Page({ params }: { params?: any }) {
  const post = await client.fetch<SanityDocument>( postQuery, params );
  return(
  <main className="mx-4 pt-24 mb-16">
       <article className='max-w-[1024px] flex flex-col gap-4 md:mx-auto justify-center'>
     {post ? <Post post={post} /> : <><h1>Page Not Found</h1><div>The page you are looking for doesn&apos;t exist...</div></>}
     </article>
  </main>
  )
}

export const revalidate = 60