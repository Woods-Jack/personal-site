import { SanityDocument } from "@sanity/client";
import Post from "@/components/common/Posts/Post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  // Ensure at least one empty object is returned to prevent Vercel build failure
  return posts.length > 0 ? posts : [{ params: {} }];
}

export default async function Page({ params }: { params?: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });

  if (!post) {
    return (
      <main className="pt-24">
        <div className="w-full">
          <h1>Page Not Found</h1>
          <div>The page you are looking for doesn&apos;t exist...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <div className="w-full">
        <Post post={post} />
      </div>
    </main>
  );
}