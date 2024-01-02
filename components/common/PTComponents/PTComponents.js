import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      const src = urlFor(value).height(450).fit('max').auto('format').url()
      return (
        <div className='justify-center flex'>
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={src}
        />
        </div>
      )
    }
  }
}