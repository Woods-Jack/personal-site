import { passions } from "@/constants/projects";
import { Metadata} from 'next';
import { client } from "@/sanity/lib/client";
import { postsByCategory } from "@/sanity/lib/queries";
import PostList from "@/components/common/Posts/PostList";

type PassionProps = {
  params: { passion: string }
}

export async function generateMetadata({ params }: PassionProps): Promise<Metadata> {
  const passion = params.passion;

  return {
    title: `Passions: ${passion}`
  }
} 
 
export default async function PassionPage({ params }: PassionProps) {
  const findPassion = passions.filter((passion) => passion.slug === params.passion);
  const passion = findPassion[0];

  const selectedCategory = passion.title//.toLowerCase().replaceAll(' ','');
  console.log('CATEGORY', selectedCategory);
  const posts = await client.fetch(postsByCategory, { selectedCategory });
  console.log('posts', posts);

  return (
  <main className="pt-24">
    <div className='max-w-[1200px] flex flex-col md:mx-auto mx-4 justify-center'>
      {passion ? 
        <>
          <h1>{passion.title}</h1> 
          <p>{passion?.desc}</p>
          <h2>Recent blog posts for {passion.title}</h2>
          <PostList posts={posts} />
        </>
      : 
        <h1>Page Not Found</h1>
      }
    </div>
  </main>
  )
};