import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import { CardStack } from "../Card/CardStack";
import { getImageUrl } from "@/utils/getImageUrl";
import { formatDate } from "@/utils/formatDate";


export default function PostList({ posts = [] }: { posts: SanityDocument[] }) {
  return (
    <div className="w-full mb-6 flex flex-col space-y-4 justify-stretch">
      {posts.map((post) => (
        <CardStack 
          key={post._id}
          title={post.title} 
          desc={post.excerpt}
          img={{src: getImageUrl(post.mainImage, 300), alt: post.mainImage.asset.alt }}
          ctaText="Read full post..."
          href={`blog/${post.slug.current}`}
          date={formatDate(post.publishedAt)}
        />
      ))}
    </div>
  )
}