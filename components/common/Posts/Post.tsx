"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "../PTComponents/PTComponents";
import { formatDate } from "../../../utils/formatDate";
import { getImageUrl } from "../../../utils/getImageUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Post({ post }: { post: SanityDocument }) {
  const { title = "", publishedAt, mainImage, body = "" } = post;

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1>{title}</h1>
        <div className="flex flex-col sm:flex-row justify-between w-full sm:items-center gap-2">
          <em>Published {formatDate(publishedAt)}</em>
          <a href="/blog" className="flex gap-3 items-center bg-dark-sec light-text px-4 py-2 rounded-full h-min hover:bg-[#ff709c] w-max">
            <FontAwesomeIcon icon={faArrowLeft as IconProp} />
            Return to Blog Page
          </a>
        </div>
      </div>
      {post?.mainImage && (
        <div className="relative w-screen left-1/2 right-1/2 mb-2 -ml-[50vw] -mr-[50vw] bg-light-sec flex justify-center">
          <img
            className="m-0"
            src={getImageUrl(mainImage, 1024)} // Change size for larger image quality
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