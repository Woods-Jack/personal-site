import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'

const imageBuilder = createImageUrlBuilder({
  projectId: 'fkxi4obq',
  dataset: 'production',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
