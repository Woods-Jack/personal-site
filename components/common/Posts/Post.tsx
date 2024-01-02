"use client";

import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "../PTComponents/PTComponents";
import { formatDate } from "../../../utils/formatDate";
import { getImageUrl } from "../../../utils/getImageUrl";

export default function Post({ post }: { post: SanityDocument }) {
  const { title = "", publishedAt, mainImage, body = "", categories } = post;
  
  const aspectRatio = mainImage.aspectRatio || 1;
  const calcWidth = 600 * aspectRatio;

  return (
    <article>
      <div className="max-w-[1200px] mx-auto mb-4">
        <h1>{title}</h1>
        <div className="flex flex-row space-x-4 justify-end items-end">
          <em>Published {formatDate(publishedAt)}</em>
          {categories.map((category: string) => (
            <Link key={category} className="inline-block bg-[#175873] light-text rounded-xl px-4 py-2 cursor-pointer" href={`/passions/${category.toLowerCase().replaceAll(' ','')}`}>
              {category}
            </Link>
          ))}
        </div>

      </div>
      {post?.mainImage ? (
        <div className="w-full bg-light-sec flex justify-center">
          <div className="relative h-[600px] w-auto">
            <Image
              className="m-0 mr-4"
              src={getImageUrl(mainImage, 600)}
              height={600}
              width={calcWidth}
              alt={mainImage.alt}
            />
          </div> 
        </div>
      ) : null}
      <div className="max-w-[1200px] mx-auto my-6 prose-xl">
       <PortableText value={body} components={ptComponents} />
      </div>
     
    </article>
  )
}