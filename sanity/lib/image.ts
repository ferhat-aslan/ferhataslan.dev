import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

export const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source).auto('format');
}

export function urlForSeoImage(source: SanityImageSource, width = 1200, height = 630) {
  return urlForImage(source).width(width).height(height).fit('crop');
}
