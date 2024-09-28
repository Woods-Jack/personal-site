import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'
import { Image } from '@sanity/types'
import { PortableTextComponentProps, PortableTextComponents, PortableTextMarkComponentProps } from '@portabletext/react';

function urlFor(source: Image) {
  return imageUrlBuilder(client).image(source)
}

interface CustomImage extends Image {
  alt?: string;
  caption?: string;
}


export const ptComponents: PortableTextComponents = {
  types: {
    customImage: ({ value }: { value: CustomImage }) => {
      if (!value?.asset?._ref) {
        return null
      }
      const src = urlFor(value).height(450).fit('scale').auto('format').url()
      return (
        <div className='flex flex-col gap-2 pb-4'>
          <img
            className='w-min max-w-full'
            alt={value.alt || ' '}
            loading="lazy"
            src={src}
          />
          {value.caption && <span className='italic text-base'>{value.caption}</span>}
        </div>
      )
    },
  },
  marks: {
    link: ({ value, children }: PortableTextMarkComponentProps<any>) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a className='underline font-semibold text-[#175873]' href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : undefined}>{children}</a>
      )
    }
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => <ul className='ml-8 list-disc my-4'>{children}</ul>
  },
  block: {
    blockquote: ({ children }: PortableTextComponentProps<any>) => {
      return (
        <blockquote className='m-4 pl-3 border-l-4 border-[#ff709c] italic'>{children}</blockquote>
      )
    }
  },
}
