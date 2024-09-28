import { CardStack } from '@/components/common/Card/CardStack';
import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries';
import { getImageUrl } from '@/utils/getImageUrl';
import { Image, PortableTextSpan } from '@sanity/types';

interface BlogPost {
  _id: string;
  title: string;
  publishedAt: Date;
  slug: {
    current: string;
  }
  body: PortableTextSpan;
  mainImage: Image;
  imageAltText: string;
  excerpt: string;
};


export default async function Blog() {
  const posts: BlogPost[] = await client.fetch(postsQuery);
  const BASE_URL = '/blog/'

  return (
    <main className='mx-4 pt-24 mb-16'>
      <div className='max-w-[1024px] flex flex-col md:mx-auto mx-4 justify-center'>
        <div className='max-w-[768px]'>
          <h1>My Blog</h1>
          <p>Welcome to my blog! This is a space for me to share things I&apos;m interested in. Some posts will be about software engineering, while others not so much!  Have a look at some of my latest blog posts below...</p>
          </div>
        {posts.map((post) => {
          const img = {
            src: getImageUrl(post.mainImage, 400),
            alt: post.imageAltText,
          };
          const url = BASE_URL + post.slug.current;
          return (
            <CardStack key={post._id} title={post.title} img={img} desc={post.excerpt} href={url} ctaText='Read More'/>
          )
        }
        )}
      </div>
    </main>
  );
}

export const revalidate = 60;