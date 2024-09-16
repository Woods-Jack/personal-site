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
    <>
      <h1>{title}</h1>
      <em>Published {formatDate(publishedAt)}</em>

      {post?.mainImage && (
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-light-sec flex justify-center">
          <Image
            className="m-0"
            src={getImageUrl(mainImage, 800)} // Change size for larger image quality
            height={600}
            width={1024} // Full-width size
            alt={mainImage.alt}
          />
        </div>
      )}
      <div className="max-w-screen-md">
        <PortableText value={body} components={ptComponents} />
      </div>


    </>
  )
}