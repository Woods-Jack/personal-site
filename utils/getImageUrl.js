import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export const getImageUrl = (img, height) => {
  return builder.image(img).height(height).url()
}