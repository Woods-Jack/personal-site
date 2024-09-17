import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'
import { Image } from '@sanity/types'

function urlFor (source: Image) {
  return imageUrlBuilder(client).image(source)
}

interface CustomImage extends Image {
  alt?: string;
  caption?: string;
}

export const ptComponents = {
  types: {
    customImage: ({ value }:{value: CustomImage}) => {
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
    }
  }
}