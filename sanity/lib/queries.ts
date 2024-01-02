import groq from "groq";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, mainImage, publishedAt, "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "..."
  } | order(publishedAt desc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage{..., "aspectRatio": asset->metadata.dimensions.aspectRatio}, body, publishedAt, "categories": categories[]->title
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all categories
export const categoriesQuery = groq`*[_type == "post"]{
  categories[]->{
    title
  }
} | order(categories asc)`;

// Filter by category
export const postsByCategory = groq`*[_type == "post" && defined(slug.current) && references(*[_type == "category" && title == $selectedCategory]._id)]{
  _id, title, slug, mainImage, publishedAt, "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "..."
} | order(publishedAt desc)`;
